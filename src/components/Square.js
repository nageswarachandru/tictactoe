import React from 'react';

// eslint-disable-next-line arrow-body-style
const Square = ({value,onClick})=> {


  return <button type = "button" className = "square" onClick = {onClick}>{value}</button> ;
  
};

export default Square;
