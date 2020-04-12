/**
 * Implement customMap() function for JS arrays. 
 * The functionality should be exactly the same as that of JS native .map() function. 
 * Function customMap() should return a new array and not change the array on which we are mapping
 */
Array.prototype.customMap = Array.prototype.customMap || function(callback){
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}
const arr = [1, 2, 3];
const squaredNums = arr.customMap((item, index) => {
	return item * item;
}); 
console.log(squaredNums); // should output [1, 4, 9]
console.log(arr); // should output [1, 2, 3]
