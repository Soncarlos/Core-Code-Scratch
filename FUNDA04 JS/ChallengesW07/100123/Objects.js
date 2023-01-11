
// First 
let Ani={name:'dog', legs:4, color: 'white'};
 function animal(obj){
   return console.log('This', obj.color, obj.name, 'has', obj.legs, 'legs');
 }

 animal(Ani);

 // Second 
function animal2P(obj){
   
   return 'This ' + (obj.color) +' '+ (obj.name) + ' has '+ (obj.legs) + ' legs.';
 }

 animal(Ani);