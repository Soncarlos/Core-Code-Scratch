function validParentheses(parens) {
 
   const pat=/(\(\))/g;  
   const pat2=/^[\(][\)]$/g;  
   const arr= parens.match(/^[\(][\)]$/g);

    const arr1= parens.match(pat);
    const arr2= parens.match(pat2);
    console.log(arr);  
    //console.log(parens.search(pat2));

    for(let i of arr){
      if(i=="()"){
        return true }
    }
    return false
  }

  const str1="()" //  =>  true
const  str2 =")(()))"//          =>  false
const str3="("         //      =>  false//
const str4="(())((()())())"
const str5=""
  console.log(validParentheses(str4));