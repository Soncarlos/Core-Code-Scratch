function digitize(n) {
   str= new String(n);
   Matriz=new Array();
     for(let i=str.length-1; i>=0;i--){
     Matriz.push(Number(str[i]));
     }
     return Matriz;
    }
    console.log((digitize(123456789)));
    