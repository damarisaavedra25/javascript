/*function sum(a,b) {
    return a+b;
}

let result = sum(4,3, 6, 2);

console.log(result)*/
//2nd way
/*
function sum(){
    return arguments[0] + arguments[1] + arguments[2]
}

let result = sum(4,3,6,2);

console.log(result);

3rd way rest parameter*/

function sum(a,b,...args){
    let num = a+b;

    for(let n of args){
        num = num + n;
    }

    return num;
}

let result = sum(4,3,6,2,5);

console.log(result);