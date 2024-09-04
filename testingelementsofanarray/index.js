const numbers = [1, 2, 3];

//every() checks if all elements match
//checks if some match

const atLeastOnepositive = numbers.some(function(value) {
return value >= 0;
});

console.log(atLeastOnepositive);