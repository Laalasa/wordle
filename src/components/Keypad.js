import React, { useEffect, useState } from 'react'
import '../styles/Keypad.css';

export default function Keypad({usedKeys}) {
    const [letters, setLetters] = useState(null);
    useEffect(() => {
        fetch('https://wordle-api-f3ik.onrender.com/letters')
        .then(res => res.json())
        .then(json => {
            setLetters(json)
        })
    },[])
  return (
    <div className='keypad'>
      {letters && letters.map((l,i) => {
        const color = usedKeys[l.key]
        return (
          <div className={color} key={l.key}>
            {l.key}
          </div>
        )
      })}
    </div>
  )
}
