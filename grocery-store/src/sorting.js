 export const sort = ({by,list}) =>{
    switch (by.type) {
       case 'name-asc':
          return [...list].sort( (a, b) => a[by.name].toLowerCase() >= b[by.name].toLowerCase() ? 1 : -1 );
       break;
      case 'name-desc':
          return [...list].sort( (a, b) => a[by.name].toLowerCase() <= b[by.name].toLowerCase() ? 1 : -1 );
      break;
      case 'high-price':{
        console.log("type is "+by.type+" "+by.name);
          return [...list].sort( (a, b) => a[by.name] <= b[by.name] ? 1 : -1 );
      }
      break;
      case 'low-price':
          return [...list].sort( (a, b) => a[by.name] >= b[by.name] ? 1 : -1 );
          break;
      default:
        return [...list];
        break;
      }
 };

 