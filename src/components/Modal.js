import React from 'react'
import Confetti from './Confetti'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>Congrants, you won in {turn} turns</h1>
                <Confetti/>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Better luck next time :) </h1>
                <p>The word is <strong>{solution}</strong></p>
            </div>
        )}
    </div>
  )
}
