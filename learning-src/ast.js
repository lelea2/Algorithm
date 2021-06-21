function readToken (token) {
  if (token === '(') {
    return {
      type: 'OPENING_PARENS'
    };
  } else if (token === ')') {
    return {
      type: 'CLOSING_PARENS'
    };
  } else if (token.match(/^\d+$/)) {
    return {
      type: 'INTEGER',
      value: parseInt(token)
    };
  } else {
    return {
      type: 'SYMBOL',
      value: token
    };
  }
}

export function tokenize (expression) {
  return expression
    .replace(/\(/g, ' ( ')
    .replace(/\)/g, ' ) ')
    .trim()
    .split(/\s+/)
    .map(readToken);
}

export function buildAST (tokens) {
  return tokens.reduce((ast, token) => {
    if (token.type === 'OPENING_PARENS') {
      ast.push([]);
    } else if (token.type === 'CLOSING_PARENS') {
      const current_expression = ast.pop();
      ast[ast.length - 1].push(current_expression);
    } else {
      const current_expression = ast.pop();
      current_expression.push(token);
      ast.push(current_expression);
    }
    return ast;
  }, [[]])[0][0];
}

export function parse (expression) {
  return buildAST(tokenize(expression));
}

import { assert } from 'chai';

import { tokenize, buildAST, parse, evaluate } from '../parser';

describe('tokenize', () => {
  it('should digest an expression string into a list of tokens', () => {
    assert.deepEqual(tokenize('(1 2 3)'),
      [ { type: 'OPENING_PARENS' },
        { type: 'INTEGER', value: 1 },
        { type: 'INTEGER', value: 2 },
        { type: 'INTEGER', value: 3 },
        { type: 'CLOSING_PARENS' } ]);
    assert.deepEqual(tokenize('(ay bee cee)'),
      [ { type: 'OPENING_PARENS' },
        { type: 'SYMBOL', value: 'ay' },
        { type: 'SYMBOL', value: 'bee' },
        { type: 'SYMBOL', value: 'cee' },
        { type: 'CLOSING_PARENS' } ]);
    assert.deepEqual(tokenize('(1 (2 3))'),
      [ { type: 'OPENING_PARENS' },
        { type: 'INTEGER', value: 1 },
        { type: 'OPENING_PARENS' },
        { type: 'INTEGER', value: 2 },
        { type: 'INTEGER', value: 3 },
        { type: 'CLOSING_PARENS' },
        { type: 'CLOSING_PARENS' } ]);
  });
});

describe('buildAST', () => {
  it('should convert a list of tokens into an abstract syntax tree', () => {
    assert.deepEqual(buildAST(tokenize('(1 2 3)')),
      [ { type: 'INTEGER', value: 1 },
        { type: 'INTEGER', value: 2 },
        { type: 'INTEGER', value: 3 }
      ]);
    assert.deepEqual(buildAST(tokenize('(ay bee cee)')),
      [ { type: 'SYMBOL', value: 'ay' },
        { type: 'SYMBOL', value: 'bee' },
        { type: 'SYMBOL', value: 'cee' }
      ]);
    assert.deepEqual(buildAST(tokenize('(+ 22 3)')),
      [ { type: 'SYMBOL', value: '+' },
        { type: 'INTEGER', value: 22},
        { type: 'INTEGER', value: 3 }
      ]);
  });
  it('should work recursively on nested expressions', () => {
    assert.deepEqual(buildAST(tokenize('(1 (2 3))')),
      [ { type: 'INTEGER', value: 1 },
        [ { type: 'INTEGER', value: 2 },
          { type: 'INTEGER', value: 3 }
        ]
      ]);
  });
});

describe('parse', () => {
  it('should convert an expression string into an abstract syntax tree', () => {
    assert.deepEqual(parse('(1 2 3)'),
      [ { type: 'INTEGER', value: 1 },
        { type: 'INTEGER', value: 2 },
        { type: 'INTEGER', value: 3 }
      ]);
    assert.deepEqual(parse('(+ 2 3)'),
      [ { type: 'SYMBOL', value: '+' },
        { type: 'INTEGER', value: 2 },
        { type: 'INTEGER', value: 3 }
      ]);
  });
  it('should work recursively on nested expressions', () => {
    assert.deepEqual(parse('(+ (+ 1 1) 3)'),
      [ { type: 'SYMBOL', value: '+' },
        [ { type: 'SYMBOL', value: '+' },
          { type: 'INTEGER', value: 1 },
          { type: 'INTEGER', value: 1 }
        ],
        { type: 'INTEGER', value: 3 }
      ]);
  });
});
