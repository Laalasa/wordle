import wordle from "./imgs/logo.png";
import "./styles/App.css"
import BallAnimation from "./BallsAnimation";
import { useEffect, useState } from "react";
import Wordle from "./components/Wordle"

function App() {
  const [solution, setSolution] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        let randomWord = json[Math.floor(Math.random() * json.length)]
        setSolution(randomWord.words.toLowerCase())
      })
  }, [])


  return (
    <div className="App">
      <div className="logo">
        <a href="/"><img src={wordle} width="180px" alt="" /></a>
        </div>
      <div className="container">
        {<Wordle solution={solution}/>}
      </div>
      <BallAnimation />
    </div>
  );
}

export default App;
