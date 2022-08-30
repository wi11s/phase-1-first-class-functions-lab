const returnFirstTwoDrivers = (array) => {
    return [array[0], array[1]];
}

const returnLastTwoDrivers = (array) => {
    return [ array[array.length - 2], array[array.length - 1]];
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(int) {
    return function(fare) {return fare*int};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (allDrivers, twoDrivers) => {
    return twoDrivers(allDrivers);
}