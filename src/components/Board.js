/* eslint-disable arrow-body-style */
import React from 'react';
import Square from './Square';

// eslint-disable-next-line arrow-body-style
const Board = ({board, handleSquareClick, winningSquares}) => {
  // eslint-disable-next-line arrow-body-style
  const renderSquare = position => {
    const isWinningSquare = winningSquares.includes(position);
    return ( 
    <Square 
      value={board[position]}  
      onClick = {() => handleSquareClick(position)} 
      isWinningSquare = {isWinningSquare}
  
    /> 
    );
  };

  return (
    <div className = "board">
      
      <div className = "board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        
      </div>
      <div className = "board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        
      </div>
      <div className = "board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

    </div>
  )
}

export default Board
