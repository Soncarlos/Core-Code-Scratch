  let strCount={
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:null
    }
    function Cstring(obj){
    let count=0;
    for (let i in obj) {
      if (typeof(obj[i]) == 'string'){
        count++;
     } 
    }
    for (let i in obj) {
      if (Array.isArray(obj[i])){
        for(let x in obj[i]){
          if (typeof(obj[i][x]) == 'string'){
            count++;
          }       
         }     
        } 
    }    
     return count;    
    }
     console.log(Cstring(strCount));