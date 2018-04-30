/**
 * Problems: Having to solve for promise sequentially and promise function in called after each loop
 * Approach 1: 
 * Promise.resolve()
  .then(x => funcs[0]()) // resolve func[0]
  .then(x => funcs[1]()) // resolve func[1]
  .then(x => funcs[2]()) // resolve func[2]
 *
 * Approach 2:
 * Promise.resolve([])
  .then(x => funcs[0]().then(Array.prototype.concat.bind(x)))
  .then(x => funcs[1]().then(Array.prototype.concat.bind(x)))
  .then(x => funcs[2]().then(Array.prototype.concat.bind(x)))
 */
/*
 * promiseSerial resolves Promises sequentially.
 * @example
 * const urls = ['/url1', '/url2', '/url3']
 * const funcs = urls.map(url => () => $.ajax(url))
 *
 * promiseSerial(funcs)
 *   .then(console.log)
 *   .catch(console.error)
 */
const promiseSerial = funcs => {
  return funcs.reduce((promise, func) => {
    promise.then(result => {
      return func().then(Array.prototype.concat.bind(result))
    });
    Promise.resolve([]);
  });
};

// some url's to resolve
const urls = ['/url1', '/url2', '/url3'];

// convert each url to a function that returns a promise
const funcs = urls.map(url => () => $.ajax(url));

// execute Promises in serial
promiseSerial(funcs)
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
