// Use split
// Use Map
// Use Reverse
// use join
let str="Hey fellow warriors" //) => returns "Hey wollef sroirraw" 
let str1="This is a test"  // => returns "This is a test" 
let str2= "Welcome" //)=> returns "This is rehtona test"

function spinWords(string){
 let result=string.split(' ').map(el=>valLength(el)).join(' ');
return result;
}
var valLength=function(word){
   //return  word.length>4? word.split('').reverse().join(''):word
let arr=[];
if(word.length>4){
  arr= word.split('').reverse().join('');
  }else{
    arr=word;
}
return arr;
}
console.log(spinWords(str));