import React from 'react'

// eslint-disable-next-line arrow-body-style
const StatusMessage = ({winner,current}) => {
  const noMovesLeft = current.board.every(el => el !==null);
  return (
    <div className= "status-message">
      {winner && (
      <>
      winner is{' '}
      <span className= {winner === 'X' ? 'text-green' : 'text-orange'}>
        {winner}
      </span>
      </> )}
    {!winner && !noMovesLeft && 
    <>
    Next player is <span className={current.isXNext ? 'text-green' : 'text-orange'}> {current.isXNext ? 'X' : 'O'} </span>
    </>}
    {!winner && noMovesLeft && 
    <>
    <span className = "text-green">X</span > and{' '} 
    <span className = "text-orange">O</span> are tied
    </>
    }
    </div>
  )
}

export default StatusMessage
