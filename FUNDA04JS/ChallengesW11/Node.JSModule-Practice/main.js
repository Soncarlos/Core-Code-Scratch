import { sum, substraer } from './operations.js'
function displaySum(a, b) {
    return `The sum  between a and b  is: ${sum(a, b)}`
}

function displaySub(a, b) {
    return `The sub  between a and b  is: ${substraer(a, b)}`
}

console.log(displaySub(1, 5));
console.log(displaySum(20, 5));