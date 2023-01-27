function filterDuplicates(data){
  const noDupli=[];
  let j=0; 
  for(let i of data){
     if(!noDupli.includes(i)) {noDupli.push(i);}
    }
    return noDupli;   
}
const data=[7,6,4,3,3,4,9,10];
console.log(filterDuplicates(data));
