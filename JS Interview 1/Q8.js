/**
 * Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples
 * 
 * ANS
 * 
 * async keyword is added to functions to tell them to return a promise rather than directly 
 * returning the value. In addition, this lets synchronous functions avoid any potential 
 * overhead that comes with running with support for using await. 
 * By only adding the necessary handling when the function is declared async.
 * 
 * We just need to add an await keyword before the method call, and then assign the result 
 * to a variable. 
 * The await keyword causes the JavaScript runtime to pause your code on this line, 
 * allowing other code to execute in the meantime, until the async function call has returned its result. 
 * Once that's complete, our code continues to execute starting on the next line.
 * 
 * 
 * async/await provide a nice, simplified way to write async code that is simpler to read and maintain. 
 */