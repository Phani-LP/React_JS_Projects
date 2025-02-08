import React, { useEffect, useState } from "react";
import './game.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RockPaperScissors() {
  const [playerSelection, setPlayerSelection] = useState("");
  const [systemSelection, setSystemSelection] = useState("");
  const [output, setOutput] = useState("To play the game choose one.");
  const choices = ["Rock", "Paper", "Scissors"];
  const play = (value) => {
    setPlayerSelection(value);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setSystemSelection(choices[randomIndex]);
    determineWinner(choices, choices[randomIndex]); 
  };

  const determineWinner = (playerSelection, systemSelection) => {
    if (
      (playerSelection == "Paper" && systemSelection == "Rock") ||
      (playerSelection == "Scissors" && systemSelection == "Paper") ||
      (playerSelection == "Rock" && systemSelection == "Scissors")
    ) {
      setOutput("You Won!!!");
    } else {
      setOutput("Computer Won.");
    }
  };

  return (
    <div className="container">
      <p style={{padding:"20px", fontSize:"1.5rem", justifySelf:"center"}}><u>{output}</u></p>
      <p style={{padding:"5px", fontSize:"1.3rem"}}>Computer Choice: <i>{systemSelection}</i></p>
      <p style={{padding:"5px", fontSize:"1.3rem"}}>Your Choice: <i>{playerSelection}</i></p>
      <div className="buttons-class"><button onClick={() => play("Rock")}  class="btn btn-dark">Rock</button>
      <button onClick={() => play("Paper")}  class="btn btn-dark">Paper</button>
      <button onClick={() => play("Scissors")}  class="btn btn-dark">Scissors</button></div>
    </div>
  );
}

export default RockPaperScissors;