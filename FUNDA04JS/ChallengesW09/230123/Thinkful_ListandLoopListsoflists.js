const arr=[[2,5],[3,4],[8,7]]
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