import React from 'react';

// eslint-disable-next-line arrow-body-style
const Square = ({value, onClick,isWinningSquare})=> {


  return( <button type = "button"  
  onClick = {onClick}
  className = {`square ${isWinningSquare ? 'winning' : ''}${ value === 'X' ? 'text-green' : 'text-orange'}`}>
  {value}
  </button> 
  );
  
};

export default Square;
