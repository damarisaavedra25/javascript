// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
//Factory function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// Constructor Function

const myCircle = createCircle(1);

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);