// Code your solution in this file!
const returnFirstTwoDrivers = (x) => {
    return x.slice(0,2)
}
const returnLastTwoDrivers = (x) => {
    return x.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function multiply(fare) {
        return x * fare
    }
}
const fareDoubler = (x) => {
    return createFareMultiplier(2)(x)
}
const fareTripler = (x) => {
    return createFareMultiplier(3)(x)
}
function selectDifferentDrivers(list, func) {
    return func(list)
}

