// function to calculate speed
function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPoint = 5;
    const points = 12;
    let demeritPoints = 0;

    // if car speed is below or equal to speed limit
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const excessSpeed = speed - speedLimit;
        demeritPoints = Math.floor(excessSpeed / demeritPoint);
    }

    // if demerit points are above 12, return "License Suspended"
    if (demeritPoints > points) {
        return "License Suspended";
    } else {
        return "Points: " + demeritPoints;
    }
}

// Example usage:
let carSpeed = 80; // Replace with the actual speed
let result = checkSpeed(carSpeed);
console.log(result);
