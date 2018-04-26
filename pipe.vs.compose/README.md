### Pipe vs. Compose concept in JS

This is leveraging `reduce()` and `reduceRight()` concept in JS


```javascript
pipe = (...functions) => (value) => {
  return functions
    .reduce((currentValue, currentFunction) => {
       return currentFunction(currentValue);
    }, value);
}
````

// Eg:
pipe(
  getName,
  uppercase,
  get6Characters,
  reverse 
)({ name: 'Buckethead' })

```javascript
compose = (...fns) => (value) => {
  return fns.reduceRight((v, f) => {
    f(v);
  }, value);
}
```

// Eg (reverve the chain)
compose(
  reverse,
  get6Characters,
  uppercase,
  getName,
)({ name: 'Buckethead' })