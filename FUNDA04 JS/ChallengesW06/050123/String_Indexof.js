function indexOfIgnoreCase(str1, str2){
    let ns=str1.indexOf(str2.toLowerCase());
    return ns;
    }
    console.log(indexOfIgnoreCase('bit', 'it'));
    console.log(indexOfIgnoreCase('bit', 'IT'));