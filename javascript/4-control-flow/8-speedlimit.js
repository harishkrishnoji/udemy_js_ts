// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)


checkSpeed(136);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (typeof speed !== 'number')
        return NaN;

    if (speed < speedLimit + kmPerPoint) {
        console.log("ok");
    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 13)
            console.log("license suspended");
        else
        console.log("Points:", points);
    }
}