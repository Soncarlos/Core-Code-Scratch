str1="Hello"//=== "72olle"
str2="good"// === "103doo"
str3="hello world"// === "104olle 119drlo"
const encrypt=((word)=>{   
    let charCode=word.charCodeAt(0);
    let secondchar=word[1];
    console.log(word)
    word=word.replace(word[0], charCode);
    console.log(word);
    console.log(secondchar)
    word=word.replace(secondchar,word[word.length-1]);
    console.log(word)
    word=word.replace(/\w$/, secondchar);
    return word;
});
var encryptThis = function(text) {
  let arr=text.split(" ");
  let result="";
  arr.forEach((word) =>{
    result= result +' '+ encrypt(word);
  });
  return result;  
}
console.log(encryptThis(str3));
