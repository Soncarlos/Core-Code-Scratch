function Nameme(first, last){
    this._firstName=first,
    this._lastName=last,
    
  Object.defineProperties(this, {
     firstName:{
      get: function(){
          return _firstName; 
      },
      set: function(newfirstname){
          _fiirstName=newfirstname;
      }
    },
    lastName:{
      get: function(){
        return _lastName;
      },
      set: function(newlastName){
        _lastName=newlastName;
      }
    },
    fullname:{
    get:function(){
      return `${_firstName} ${_lastName}`;
    }      
    }
    })
  };

  // function NamedOne(first, last) {
  //  
  //       this.firstName = first;
  //       this.lastName = last;
          
  //     Object.defineProperties(this, {
  //       fullName:{  
  //       get: function(){
  //             return this.firstName +' '+ this.lastName;
  //         },
  //         set:function(name){
  //          const parts = name.split(' ');
  //          if(parts.length===2){
  //          this.firstName= parts[0];
  //          this.lastName=parts[1];
  //          }           
  //         }      
  //       }
  //     });
  //   }
    

