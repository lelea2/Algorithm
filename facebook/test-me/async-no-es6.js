fetchAll = combineFetchers([fruitFetcher, animalFetcher, mineralFetcher]);
sampleFetcher('prefix', function(results) { /* results is an array of strings */ });

function combineFetchers(fetchers) {
   return function (prefix, callback) { 
       let allResults = [];
       let funcNumCalled = 0;
       let failedFunc = 0;
       fetchers.forEach(fetcher => {
         try {
           fetcher(prefix, (results) => {
               allResults.push(...results);
              funcNumCalled += 1;
           });
         } catch (ex) {
            console.error('fail')
            funcNumCalled += 1;
         }
         if (funcNumCalled === fetchers.length) {
            callback(allResults);
         }
         
      }
  }
}
  
  
  function combineFetchers(fetchers) {
    if (fetchers.length === 0) {
      console.warn('');
    }
   return function (prefix, callback, handleError) { 
       let allResults = [];
       let funcNumCalled = 0;
       fetchers.forEach(fetcher => {
         try {
           fetcher(prefix, (results) => {
               allResults.push(...results);
              funcNumCalled += 1;
           });
         } catch (ex) {
            return handleError(ex);
            break;
         }
         if (funcNumCalled === fetchers.length) {
            callback(allResults);
         }
      }
  }
}
    
    
function combineFetchers(fetchers) {
    if (fetchers.length === 0) {
      console.warn('');
    }
   return function (prefix, callback, getAllFaillingFetcher) { 
       let allResults = [];
       let funcNumCalled = 0;
       let failFunc = [];
       fetchers.forEach(fetcher => {
         try {
           fetcher(prefix, (results) => {
               allResults.push(...results);
              funcNumCalled += 1;
           });
         } catch (ex) {
            failFunc.push(fetcher);
         }
         if (failFunc.length + funcNumCalled === fetcher.length) {
          // if (failFunc.length > 0) {
            getAllFailingFetcher(failFunc)
          // }
           //if (funcNumCalled >0) {
            callback(allResults);
         //}
      }
  }
}

// Test Cases:
// all function successful
// fruitFetcher faied, other 2 success // ex from fruitFetcher
// fruitFetcher failed with timeout 5s, animalFetcher fialed timeout 2s -> ex should be animalFetcher
// pass empty array
// all failed case
    
//  [fruitFetcher, animalFetcher, mineralFetcher]
// fruitFetcher () => success
    animalFetcher () => 

//  [fruitFetcher, animalFetcher, mineralFetcher]
//  [fruitFetcher, animalFetcher, mineralFetcher].forEach(fetch => {
 //   fruitFetcher(prefix, result -> 
 //});
const fetchAll = combineFetcher( [fruitFetcher, animalFetcher, mineralFetcher]);
fetchAll(‘prefix’, …) 
