let p1="is2 Thi1s T4est 3a";
let px="Espinoz2a Carl1os";
let p2="4of Fo1r pe6ople g3ood th5e the2";
let p3="  -->  ";

function order(words){
 let sortString= words.split(' ').sort((a,b)=>{
    let aN=Number(a.replace(/[A-Za-z]/g,''));
    let bN=Number(b.replace(/[A-Za-z]/g,''));
    return aN-bN    
 });
 return sortString.join(' ');
}
console.log(order(p1));
 
