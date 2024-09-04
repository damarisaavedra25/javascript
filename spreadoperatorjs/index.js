// spread operator = ...allows an iterable such as an array or 
// string to be expanded
//into separate elements
//(unpacks the elements)

/*let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers);  //  we can't place an array directly by using this method
console.log(maximum); 
*/

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
console.log(maximum);

