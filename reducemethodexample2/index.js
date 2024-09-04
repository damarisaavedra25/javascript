const people = [
    {
        name: "Damaris",
        age: 27
    },
    {
        name: "Mayo",
        age: 5
    },
    {
        name: "Jael",
        age: 34
    }
];

const oldestAge = people.reduce((p,c) => {
    if (c.age > p) {
        return c.age;
    }
    
    return p;
}, 0);

console.log(oldestAge); 