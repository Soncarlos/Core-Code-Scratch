//========================= MEMORY
let memory=[];
let activeOperation= null;
let prevOperation= null;
/*FEATURES
* 1-> FONT DISPLAY BASE IN RESULT LENGTH.
* 2-> COPY PERCENT BEHAVIOR
* 3-> HISTORY
* 4-> BACKSPACE (DELETE SINGLE DIGIT)
*/

//========================= WORK WITH DISPLAY
const display= document.querySelector('#display');

//========================= WORK WITH AC
const ac= document.querySelector('#ac');
ac.addEventListener('click', ()=>{
display.innerHTML='0'; ac.innerHTML='AC';
memory=[];
activeOperation= null;
prevOperation= null;
});

//========================= WORK WITH SIG
const sig= document.querySelector('#sig');
sig.addEventListener('click', ()=>{
let currentDisplay= display.innerHTML;
let newdisplay= `${Number(currentDisplay*-1)}`; 
if(newdisplay ==='0'){
newdisplay= '-0';
}
display.innerHTML= newdisplay;
})

//========================= WORK WITH PERCENT
const percent= document.querySelector('#percent');

//========================= WORK WITH DECIMAL
const decimal= document.querySelector('#dot');
const decimalHandler= ()=>{
const currenDisplay= display.innerHTML;
if(currenDisplay.includes('.')) return;
display.innerHTML=`${currenDisplay}.`;


}
decimal.addEventListener('click', ()=> decimalHandler());

//========================== EQUAL
const equal= document.querySelector('#equal');
const equalHandler = () =>{
const operation= `${memory.join(' ')} ${Number(display.innerHTML)}`
display.innerHTML= `${Math.round(eval(operation))}`;
memory=[];
activeOperation=null;
prevOperation=null;
}
equal.addEventListener('click',()=> equalHandler())

//========================== OPERATORS
const sum= document.querySelector('#sum');
const sub= document.querySelector('#sub');
const mul= document.querySelector('#mul');
const div= document.querySelector('#div');
const operators=[
{el:sum, op:'+'},
{el:sub, op:'-'},
{el:mul, op:'*'},
{el:div, op:'/'},
];

const selectedOperator = (el) =>{
el.style.backgroundColor='#ffffff';
el.style.color='#ee6c4d';  
}
const unselectedOperator= (el)=>{
el.style.backgroundColor='#ee6c4d';
el.style.color='#ffffff';  
}

const operatorHandler = (op,el)=>{
selectedOperator(el);
const currenDisplay= display.innerHTML;
if(memory.length===0){
  memory.push(currenDisplay);
}
if(memory.length > 1){
  equalHandler();
  memory.push(Number(display.innerHTML));
}
memory.push(op);
activeOperation=el;
prevOperation=el;
}
operators.forEach((oper)=>
oper.el.addEventListener('click', ()=> operatorHandler(oper.op, oper.el)));

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
if(prevOperation!==null){
  unselectedOperator(prevOperation);
  display.innerHTML= '';
  activeOperation= null;
}
ac.innerHTML='C'; 
const currenDisplay= display.innerHTML;
let newdisplay=`${currenDisplay}${n}`;
if(currenDisplay==='0'){
newdisplay= n;
}
display.innerHTML= `${Number(newdisplay)}`;
}
numbers.forEach((n, i) => n.addEventListener('click', () => numberHandler(i))
);