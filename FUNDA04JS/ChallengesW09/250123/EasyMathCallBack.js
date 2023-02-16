var mynumbers = [2, 8, 4]

// this option of use, for complex functions
function callback(number) {
    return number * 5;
}
// mynumbers = processArray(mynumbers, function (n) {
//     return callback(n)
// })

function processArray(arr, callback) {
    return arr.map(n => callback(n));
}
// this option of use, for simple function
mynumbers = processArray(mynumbers, function (n) {
    return n * 5;
})
console.log(mynumbers);


