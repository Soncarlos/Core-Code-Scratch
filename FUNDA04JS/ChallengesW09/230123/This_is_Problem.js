function Nameme(first, last){
    this.firstName=first,
    this.lastName=last,
    this.name= first+ ' '+ last;
};
 var n= new Nameme('Carlos', 'Espinoza');   
 console.log(n.firstName);
 console.log(n.lastName);
 console.log(n.name)
  