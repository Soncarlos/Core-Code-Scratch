//========================= WORK WITH DISPLAY
const display= document.querySelector('#display');

//========================= WORK WITH AC
const ac= document.querySelector('#ac');

//========================= WORK WITH SIG
const sig= document.querySelector('#sig');

//========================= WORK WITH PERCENT
const percent= document.querySelector('#percent');

//========================= WORK WITH DECIMAL
const decimal= document.querySelector('#dot');

//========================= WORK WITH NUMBERS
const zero= document.querySelector('#zero');
const one= document.querySelector('#one');
const two= document.querySelector('#two');
const three= document.querySelector('#three');
const four= document.querySelector('#four');
const five= document.querySelector('#five');
const six= document.querySelector('#six');
const seven= document.querySelector('#seven');
const eight= document.querySelector('#eight');
const nine= document.querySelector('#nine');

const numbers=[zero,one, two, three,four, five, six, seven, eight, nine];

const numberHandler=(n)=>{
    const currenDisplay= display.innerHTML;
 let newdisplay=`${currenDisplay}${n}`;
 if(currenDisplay==='0'){
    newdisplay= n;
 }
 display.innerHTML=`${Number(newdisplay)}`;

};

numbers.forEach((n, i) => n.addEventListener('click', () => numberHandler(i)));