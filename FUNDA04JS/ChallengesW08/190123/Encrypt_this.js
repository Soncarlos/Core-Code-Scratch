str1="A"//=== "72olle"
str2="A wise old owl lived in an oak"// === "103doo"
str3="hello world"// === "104olle 119drlo"
const encrypt=((word)=>{
  let charCode=word.charCodeAt(0);  
  if(word.length===1) return word=charCode;
      let secondchar=word[1];    
      word=word.replace(word[0], charCode);       
      word=word.replace(secondchar,word[word.length-1]);    
      word=word.replace(/\w$/, secondchar);
      return word;     
    });

var encryptThis = function(text) {
  let arr=text.split(" ");
  let result="";
  arr.forEach((word) =>{
    result= result +' '+ encrypt(word);
  });
  return result.trim();  
}
console.log(encryptThis(str));
