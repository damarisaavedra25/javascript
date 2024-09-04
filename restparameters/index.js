/*rest parameters = (...rest) allow a function with a variable
number of arguments by bundling them into an Array

spread = expands an array into seperate Elements 
rest = bundles separate elements into an array*/

function openFridge(...foods) {
    console.log(...foods);
}

const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";
const food4 = "salad";
const food5 = "chicken";
const food6 = "fish"

openFridge(food1, food2, food3, food4, food5, food6);