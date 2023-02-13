import "./styles/App.css"
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader"
import Content from "./components/Content";

function App() {
  const [solution, setSolution] = useState("");
  const [solutionsFetched, setSolutionsFetched] = useState (false);
  const [lettersFetched, setLettersFetched] = useState (false);
  useEffect(() => {
    fetch('https://wordle-api-f3ik.onrender.com/solutions')
      .then(res => res.json())
      .then(json => {
        let randomWord = json[Math.floor(Math.random() * json.length)]
        setSolution(randomWord.words.toLowerCase())
        setSolutionsFetched(true);
      })
  }, [])

  const [letters, setLetters] = useState(null);
  useEffect(() => {
  
      fetch('https://wordle-api-f3ik.onrender.com/letters')
      .then(res => res.json())
      .then(json => {
          setLetters(json)
          setLettersFetched(true);
      })
  },[])


  return (
    <div>
      {(!lettersFetched || !solutionsFetched) && <Preloader/>}
      {lettersFetched && solutionsFetched && <Content solution={solution} letters={letters} />}

    </div>
  );
}

export default App;
