// function processData(input) {
//     let eve='';
//     let od='';
//     for(let i of input){
//         (input.indexOf(i)%2==0)?eve+=i: od+=i;
//         console.log(input.indexOf(i));    
//     }    
//     return eve.concat(' ').concat(od);
// } 
// console.log(processData('Hacker'));

// function reverseArray(arr){
//     return arr.reverse();
// }
// const ar=[1,4,3,2];
//console.log(reverseArray(ar));

function PhoneBook(obj){
    if(obj.phone!=null)
    return  obj.name+' = '+obj.phone;  
}
let person={name:'carlos', phone:'57296589'}
console.log(PhoneBook(person))