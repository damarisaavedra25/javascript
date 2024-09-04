const numbers = [3, 6, 2, 9, 1];
const sum = numbers.reduce((p,c) => {
    console.log(`Previous: ${p}`);
    console.log(`Previous: ${c}`);
    return p + c;
}, 0);
