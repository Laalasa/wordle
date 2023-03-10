import React, { useEffect, useState } from 'react'
import useWordle from '../useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'


export default function Wordle({solution, letters}) {
    const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution)
    const [showModal, setShowModal] = useState(false)
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyup)

        if(isCorrect || turn > 5) {
          setTimeout(() => setShowModal(true), 2000);
          window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn, setShowModal])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    },[guesses, turn, isCorrect])
  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/> 
      <Keypad usedKeys={usedKeys} letters={letters}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}
