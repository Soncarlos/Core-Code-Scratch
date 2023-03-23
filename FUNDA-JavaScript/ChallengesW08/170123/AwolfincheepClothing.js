function warnTheSheep(queue) {
    let indice;
  for(let i=0; i<=queue.length-1;i++){
    indice= queue.indexOf('wolf');
      
  }
  return indice==queue.length-1? "Pls go away and stop eating my sheep":
  indice<queue.length-1? "Oi! Sheep number "+ [(queue.length-1)-indice]+
    "! You are about to be eaten by a wolf!": null; 
  }

  console.log(warnTheSheep(["sheep","sheep", "sheep","wolf"]));
