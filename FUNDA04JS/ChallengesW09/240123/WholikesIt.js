function likes(names) {
    let items=names.length;
    console.log(items);
       switch(items){
           case 0: return ('no one likes this') ;
           break; 
           case 1: return `${names[items-1]} ${'likes this'}`;
           break;
           case 2: return `${names[0]} ${'and'} ${names[1]} ${'like this'}`;
           break;
           case 3: return `${names.slice(0,2)} ${'and'} ${names[2]} ${'like this'}`;
           break;
           case 4: return `${names.slice(0, 2).join(", ")} ${'and'} ${names[2]} like this`;
           break;
           default: return `${names.slice(0,3).join(", ")} ${'and'} ${(items-3)} ${'others like this'}`;
       }    
    }

    console.log(likes(['Carlos','Alvin', 'Alberto', 'Gabriel', 'Leonardo']))