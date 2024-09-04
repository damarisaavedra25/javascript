//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by both 3 and 5 => input
//divisible by 3 or 5 =?input
//not a number => 'not a number'

const output = fizzBuzz(false);
console.log(output); 

function fizzBuzz(input) {
    if (typeof input !== 'number')
    return 'not a number';

    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

    if (input % 3 === 0)
    return 'Fizz';

    if (input % 5 === 0)
    return 'Buzz';

    return input;
}