//moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {
    const arr2 = arr.filter(n => n !== 0);
    const arr3 = arr.filter(n => n === 0);
    return arr2.concat(arr3);

    //return arr.filter(n => n !== 0).concat(arr.filter(n => n === 0));
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));