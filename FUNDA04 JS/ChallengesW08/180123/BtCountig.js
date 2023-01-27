var countBits = function(n) {
    let strbin=n.toString(2);
    let num=0;
    for(let i of strbin){
        i=='1'? num++:null;
    }
    return num;  
    }