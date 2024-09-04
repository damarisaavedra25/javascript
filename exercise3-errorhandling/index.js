// 14- Exercise 3- Error Handling

try {
const numbers = [1, 2, 3, 4];
const count = countOcurrences(true, 1);
console.log(count);
}

catch (e) {
    console.log(e.message);
}

function countOcurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array');
    
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}