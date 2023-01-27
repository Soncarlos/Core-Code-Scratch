let str1="abcde";// -> 0 # no characters repeats more than once
let str2="aabbcda" //-> 2 # 'a' and 'b'
let str3="aabBcde" //-> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
let str4="IndivisI" //-> 1 # 'i' occurs six times
let str5="1ndivisibilities" //-># 1 vez i = 7
// function duplicateCount(data){
//     let Dupli=0;
//     data= data.toLowerCase();
//     for(let i=0; i<data.length; i++){
//         if(data.indexOf(data[i])!== data.lastIndexOf(data[i])){
//             Dupli++;
//             data=data.replace(new RegExp(data[i], 'g'), ''); 
//             i=i-1;
//         }               
//     }
//     return Dupli; 
//  }
console.log(duplicateCount(str2));
function duplicateCount(text) {
    let duplicates = 0;
    text = text.toLowerCase(); // todo minuscula
    for (let i = 0; i < text.length; i++) {
      if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
        duplicates++;
        text = text.replace(new RegExp(text[i], 'g'), '');
        i = i - 1;
      }
    }
    return duplicates;
  }