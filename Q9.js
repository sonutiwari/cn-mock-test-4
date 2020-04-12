/**
 * Why do we need let and const in JS. Compare it with the problems in ES5
 * 
 * ANS
 * 
 * Before let we didn't have Block scope in JS which lead to a lot of problems 
 * earlier, for example we take an array iterator variable i and declare it 
 * as var, it will be accessible even after loop is finished.
 * for (var i = 0; i < 10; i++){
 * // Do operation
 * }
 * console.log(i); // 10
 * Hence to define block scope JS introduced let keyword.
 * 
 * Similarly, earlier we didn't have privilege to make any variable immutable
 * So if accidently the value of that variable got changed, it may lead to bug, 
 * but there was no way to enforce that immutability.
 * This issue was addressed by JS in form of const keyword.
 * 
 */