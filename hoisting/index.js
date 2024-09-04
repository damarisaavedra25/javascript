//hoisting is the process of moving function declarations to the top of
// the file and this si done automatically by the javascript engine that is executing this code

function walk() {
    console.log('walk');
}

//function declaration
walk();

//function expression
run();

const run = function() {
    console.log('run');
};