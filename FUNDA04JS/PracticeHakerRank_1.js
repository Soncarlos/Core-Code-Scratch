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

// function PhoneBook(obj){
//     if(obj.phone!=null)
//     return  obj.name+' = '+obj.phone;  
// }
// let person={name:'carlos', phone:'57296589'}
// console.log(PhoneBook(person))

function filterWords(words, letters) {
    let a = new Array();
    
    for(let i in words){
        for(let x=0; x < letters.length;x++){
           if(words[i].includes(letters[x])){
               a.push(words[i]);
           }   
       }    
    } 
        return a;
    }
    const words=['he', 'saw', 'and', 'she', 'saw'];
    console.log(filterWords(words,'ae'));