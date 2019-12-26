
const red = "red" ;
const blue = "blue" ;

const makeStyle =({color,...rest}) =>{
    
     return {
        backgroundColor: color ,
        ...rest
     }

  };

 //const makeColorStyle = color => `color: ${color};`;
  
exports.makeStyle = makeStyle;
  
exports.red = red ;
exports.blue = blue ;