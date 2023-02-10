import { useState } from 'react';

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({})

    const formatGuess = () => {
        let solutionArray = [...solution]
        let formatedGuess = [...currentGuess].map((l)=>{
            return {key: l, color: 'grey'}
        })

        formatedGuess.forEach((l,i) => {
            if (solutionArray[i] === l.key){
                formatedGuess[i].color = 'green'
                solutionArray[i] = null 
            }
        })

        formatedGuess.forEach((l, i)=>{
            if(solutionArray.includes(l.key) && l.color !== 'green'){
                formatedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formatedGuess;

    }

    const addNewGuess = (formatedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formatedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })

        setTurn((prevTurn) => {
            return prevTurn+1
        })
    }

    const handleKeyup = ({key}) => {
        if(key === 'Enter'){
            if(turn > 5){
                console.log('you used all your guesses')
                return
            }

            if(history.includes(currentGuess)){
                console.log('you already tried that word')
                return
            }

            if (currentGuess.length !== 5){
                console.log('word must be 5 chars long')
                return
            }
            const formattedGuess = formatGuess()
            addNewGuess(formattedGuess)
            setUsedKeys((prevUsedKeys) => {
                let newKeys = {...prevUsedKeys}
                formattedGuess.forEach((l) => {
                    const currentColor = newKeys[l.key];

                    if(l.color === 'green'){
                        newKeys[l.key] = 'green-color'
                        return
                    }

                    if(l.color === 'yellow' && currentColor !== 'green-color'){
                        newKeys[l.key] = 'yellow-color'
                        return
                    }

                    if(l.color === 'grey' && currentColor !== 'green-color' && currentColor !== 'yellow-color'){
                        newKeys[l.key] = 'grey-color'
                        return
                    }

                })

                return newKeys
            })
            setCurrentGuess('')
        }
        if (key === 'Backspace' || key === "Delete"){
            setCurrentGuess((prev) =>{
                return prev.slice(0, -1)
            })
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev)=>{
                    return prev+key
                })
            }
        }
    }

    return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup }
}

export default useWordle;