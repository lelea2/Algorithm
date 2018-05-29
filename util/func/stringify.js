// Implementation for JSON.stringify() with pure javascript
// JSON.stringify(value[, replacer[, space]])

const getValues = (val, pretty, level, spacing) => {
  const newLine = (pretty === true) ? '\n' : '';
  if (spacing) {
    spacing = `  ${spacing}`;
  } else {
    spacing = (pretty === true) ? ` . ${new Array(level + 1).join(' . ')}` : '';
  }
  switch (typeof val) {
    case 'string':
      return `${spacing}"${val.replace(/\\g/, '\\\\').replace('"', '\"')}"`;
    case 'number':
    case 'boolean':
      return `${spacing}${val}`;
    case 'object':
      if (val instanceof Date) {
        return `${spacing}"${val.toISOString}"`;
      } else if (val instanceof Array) {
        return `[${newLine}${val.map((v) => {
          return getValues(v, pretty, level, spacing);
        }).join(`,${newLine}`)}${newLine}${spacing.replace(`  `, '')}]`;
      } else if (val === null) {
        return `${spacing}null`;
      } else {
        return `${spacing}${stringify(val, pretty, level, spacing)}`;
      }
  }
};

const stringify = (obj, pretty, level, spacing) => {
  const newLine = (pretty === true) ? '\n' : '';
  level = level ? level : 0;
  if (spacing) {
    spacing = `  ${spacing}`;
  } else {
    spacing = (pretty === true) ? ` . ${new Array(level + 1).join(' . ')}` : '';
  }
  if (typeof obj !== 'object' || obj === null || obj instanceof Array) {
    return getValues(obj);
  }
  
  const data = Object.keys(obj).map((k) => {
    return (typeof obj[k] === 'function') ? null : `${newLine}${spacing}"${k}": ${getValues(obj[k], pretty, level, spacing)}`;
  }).filter((i) => i);
  
  let result = `{${data}${newLine}${spacing.replace(' . ', '')}}`;
  result = result.replace(/:(\s)+/g, ': ');
  return result;
};


const testObj = {
  "key1": [1, 2, 3, {
    "key2": ["test", 1]
  }],
  "key3": "21",
  "key4": "123",
  "key5": 1,
  "key6": {
    "key7": {
      "key9": "test"
    }
  }
};

console.log(stringify(testObj, true));
