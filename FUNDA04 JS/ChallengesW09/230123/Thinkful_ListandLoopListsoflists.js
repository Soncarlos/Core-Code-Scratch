const arr=[[2,5],[3,4],[8,7]]
//[2, 5] --> 2 - 5 --> -3
//[3, 4] --> 3 - 4 --> -1
//[8, 7] --> 8 - 7 --> 1
//-3 * -1 * 1 --> 3
function processData(data){
    let result=[];
    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].length; j++){
            result.push(data[i][j] - data[i][++j]);           
        }
    }
    var Multiplo= result.reduce((acc, curr)=>{
    return acc*curr;        
    })
    return Multiplo;     
}
console.log(processData(arr))

// function processData(data){
// return data.map(element=> element[0]-element[1]).reduce((acc,curr)=> acc*curr);
// }
// console.log(processData(arr));