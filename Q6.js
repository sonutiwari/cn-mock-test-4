/**
 * Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6
*/

/** 
 * Ans: 
*/

/**
 * To provide inheritance, JS objects can have a prototype object, 
 * which acts as a template object that it inherits methods and properties from.
 * 
 * An object's prototype object may also have a prototype object, 
 * which it inherits methods and properties from, and so on. 
 * This is often referred to as a prototype chain, 
 * and explains why different objects have properties and methods defined on other objects available to them.
 * 
 * the properties and methods are defined on the prototype property on the Objects' 
 * constructor functions, not the object instances themselves.
 * 
 * In JavaScript, a link is made between the object 
 * instance and its prototype (its __proto__ property, 
 * which is derived from the prototype property on the constructor), 
 * and the properties and methods are found by walking up the chain of prototypes.
*/