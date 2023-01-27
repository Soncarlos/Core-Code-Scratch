
// First 
let Ani={name:'dog', legs:4, color: 'white'};
 function animal(obj){
   return "This " +(obj.color) + (obj.name)+" has "+(obj.legs)+" legs";
   }

 console.log(animal(Ani));

 // Second 
function animal2P(obj){
   
   return 'This ' + (obj.color) +' '+ (obj.name) + ' has '+ (obj.legs) + ' legs.';
 }

 console.log(animal2P(Ani));