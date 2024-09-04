const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

//const another = {};
// for (let key in circle) 
// another[key] = circle [key];

//copies the properties and methods of one or more source objects into a target object, and can use this one to clone an object or combine multiple objects into a single object 
const another = Object.assign({color: 'yellow'}, circle);


//spread an object , it takes all the properties and methods and putting them into another object
//const another = {... circle};

console.log(another);