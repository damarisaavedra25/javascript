const numbers = [1, 2, 3, 4, 1];

const count = countOcurrences(numbers, 1);

console.log(count);

function countOcurrences(array, searchElement) {
    //let count = 0;
    //for (let element of array)
    //if (element === searchElement)
    //      count++;
    // return count;


    return array.reduce((accumulator, current) => {
        const ocurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + ocurrence;
        
    }, 0);
}