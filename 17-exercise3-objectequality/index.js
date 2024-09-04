let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1,address2));
console.log(areSame(address1, address2));
// Constructor Function

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
if (typeof address1 === typeof address2) {
    return "Equal";
}
return "Not Equal";
}

function areSame(address1, address2) {
    return address1 === address2;
}
