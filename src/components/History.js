/* eslint-disable arrow-body-style */
import React from 'react'

// eslint-disable-next-line arrow-body-style
const History = ({history,moveTo,currentMove}) => {
  return (
    <div className = "histroy-wrapper">
    <ul className = "history">
      {history.map ((_, move) => {
        return (
          <li key = {move}>
            <button 
            className={`btn-move ${move === currentMove ? 'active' : ''}`}
            type = "button" onClick = {() => {
              moveTo(move);
            }}>
              {move === 0 ? 'Go lets start the game' : `Go to move #${move}`}
              </button>
            </li>
        )
      })}
      
    </ul>
    </div>
  )
}

export default History
