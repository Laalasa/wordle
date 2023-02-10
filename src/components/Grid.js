import React from 'react'
import Row from './Row'
import "../styles/Grid.css"

export default function Grid({currentGuess, guesses, turn}) {
  return (
    <div className='wrapper'>
            {guesses.map((g,i) => {
                if(turn === i){
                    return <Row key={i} currentGuess={currentGuess}/>
                }
                return <Row key={i} guess={g}/>
            })}
     
    </div>
  )
}
