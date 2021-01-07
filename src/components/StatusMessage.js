import React from 'react'

// eslint-disable-next-line arrow-body-style
const StatusMessage = ({winner,current}) => {
  const noMovesLeft = current.board.every(el => el !==null);
  return (
    <h2>{winner && `Winner is ${winner}` }
    {!winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
    {!winner && noMovesLeft && 'X and O are tied'}
    </h2>
  )
}

export default StatusMessage
