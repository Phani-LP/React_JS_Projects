import React, { useState } from "react";
import "./game.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RockPaperScissors() {
  const [playerSelection, setPlayerSelection] = useState("");
  const [systemSelection, setSystemSelection] = useState("");
  const [output, setOutput] = useState("To play the game, choose one.");

  const options = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors'
  };

  const play = (value) => {
    const randomIndex = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
    const playerChoice = options[value];
    const systemChoice = options[randomIndex];

    setPlayerSelection(playerChoice);
    setSystemSelection(systemChoice);

    if (playerChoice === systemChoice) {
      setOutput("It's a draw!");
    } else if (
      (playerChoice === 'Rock' && systemChoice === 'Scissors') ||
      (playerChoice === 'Paper' && systemChoice === 'Rock') ||
      (playerChoice === 'Scissors' && systemChoice === 'Paper')
    ) {
      setOutput("You won!!!");
    } else {
      setOutput("Computer won.");
    }
  };

  return (
    <div className="container">
      <p style={{ padding: "20px", fontSize: "1.5rem", justifySelf: "center" }}>
        <u>{output}</u>
      </p>
      <p style={{ padding: "5px", fontSize: "1.3rem" }}>
        Your choice: <i>{playerSelection}</i>
      </p>
      <p style={{ padding: "5px", fontSize: "1.3rem" }}>
        Computer choice: <i>{systemSelection}</i>
      </p>

      <div className="buttons-class">
        <button
          onClick={() => play(1)}
          className="btn btn-dark"
        >
          Rock
        </button>
        <button
          onClick={() => play(2)}
          className="btn btn-dark"
        >
          Paper
        </button>
        <button
          onClick={() => play(3)}
          className="btn btn-dark"
        >
          Scissors
        </button>
      </div>
    </div>
  );
}

export default RockPaperScissors;