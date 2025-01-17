/* eslint-disable arrow-body-style */
import React from 'react'

// eslint-disable-next-line arrow-body-style
const History = ({history,moveTo,currentMove}) => {
  return (
    <ul>
      {history.map ((_, move) => {
        return (
          <li key = {move}>
            <button 
            style = {{fontWeight: move === currentMove ? 'bold' : 'normal',
          }}
            type = "button" onClick = {() => {
              moveTo(move);
            }}>
              {move === 0 ? 'Go lets start the game' : `Go to move #${move}`}
              </button>
            </li>
        )
      })}
      
    </ul>
  )
}

export default History
