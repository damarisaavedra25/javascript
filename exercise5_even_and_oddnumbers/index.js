// program to check if the number is even or odd
// take input from the user

const number = prompt("enter a number");

//check if the number is even
if(number % 2 == 0) {
    console.log("the number is even.");
}

//if the number is odd
else {
    console.log("the number is odd");
}

//or
/*showNumbers(10);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'ODD'
        console.log(i, message);
    }
}*/