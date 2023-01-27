function indexOfIgnoreCase(str1, str2){
    let ns=str1.indexOf(str2.toLowerCase());
    let ns2= str1.lastIndexOf(str2);
    return ns +'/' +ns2 ;
    }

    console.log(indexOfIgnoreCase('itrobit', 'it'));
    console.log(indexOfIgnoreCase('ITbit', 'IT'));