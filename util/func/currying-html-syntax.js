const tag = (tagName) => {
	return (...args) => {
	   return  (
	      `<${tagName}>${[...args].join('')}</${tagName}>`
	   );
	};
}

const div = tag('div');
console.log(tag('div')('test'));
const li = tag('li');
console.log(tag('li')('one'));
console.log(tag('li')('two'));

const ul = tag('ul');
console.log(tag('ul')('two'));

console.log(
  div(
    tag('h1')('hello'),
    ul(
  li('one'),
  li('two'),
  li('three')
    )
  )
);