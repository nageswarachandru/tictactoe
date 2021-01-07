import React from 'react';

// eslint-disable-next-line arrow-body-style
const Square = ({value, onClick,isWinningSquare})=> {


  return( <button type = "button" className = "square" 
  onClick = {onClick}
  style = {{fontweight : isWinningSquare ? 'Bold' : 'Normal'}}>
  {value}
  </button> 
  );
  
};

export default Square;
