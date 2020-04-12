/**
 * Q7. Give a relevant example of Promises
 * 
 * 
 * Ans
 * 
 * let myPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, we will be using something like XHR or an HTML5 API, REST API to fetch data.
  setTimeout( function() {
    resolve("Success!")  // Everything went well!
  }, 250) 
}) 

myPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(successMessage) 
}).catch(err){
    // Promise failed.
};
 */