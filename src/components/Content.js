import React from 'react'
import wordle from "../imgs/logo.png";
import "../styles/App.css"
import BallAnimation from "../BallsAnimation";
import Wordle from "./Wordle"

function Content({solution, letters}){
    return (
        <div className="App">
          
          <div className="logo">
            <a href="/"><img src={wordle} width="180px" alt="" /></a>
            </div>
          <div className="container">
            {<Wordle solution={solution} letters={letters}/>}
          </div>
          <BallAnimation />
        </div>
      );
} export default Content;