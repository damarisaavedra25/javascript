// Speed limit = 70
// 5 -> 1 point
// Math.floor(1.3) Math.floor() rounds a number DOWN to the nearest integer:
// 12 points > suspended

checkSpeed(130);

function checkSpeed(speed) {
const speedLimit = 70;
const kmPerPoint = 5;

if (speed < speedLimit + kmPerPoint) {
console.log('Ok');
return;
}
else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
    console.log('License suspended');
else 
console.log('Points', points);
    }
}