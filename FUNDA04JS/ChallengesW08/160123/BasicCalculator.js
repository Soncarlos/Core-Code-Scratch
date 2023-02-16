function calculate(num1, operation, num2) {
    //TODO: make a basic calculator. 
     let result=0;
     switch(operation)
          {
              case '+': result= num1+num2;
              break;
              case '-': result=num1-num2;
              break;
              case '*': result=num1*num2;
              break;
              case '/': {num2 == 0? result =null : result=num1/num2};
              break;
              default:
              console.log('Not operation supported');
              result=null;  
          }  
       return result;
   }