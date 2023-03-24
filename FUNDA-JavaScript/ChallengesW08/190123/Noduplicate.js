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

function CountFrequencies(words)
{
    let result=[];
    let counter=[];
    let j=0;
    let count=0; 
  for(let i of words){
     if(!counter.includes(i)){
        count=1;
        counter.push(i);
        result.push(count);
        count=0;
      }
       else{
          count=2;
          counter.push(i);
          result.push(count);
        }
    }
    return result.sort();
  }
const words=['she', 'was', 'the', 'queen', 'she', 'was'];
  console.log(CountFrequencies(words))