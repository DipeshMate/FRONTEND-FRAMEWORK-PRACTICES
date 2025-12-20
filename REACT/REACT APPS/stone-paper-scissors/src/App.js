import React from 'react';
import Stone from './icons/Stone';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';
import { useState,useEffect } from 'react';

const choices = [
  {id: 1, name: 'Stone', component: Stone, losesTo: 2 },
  {id: 2, name: 'Paper', component: Paper, losesTo: 3},
  {id: 3, name: 'Scissors',component: Scissors, losesTo: 1}
];


  // 1. handle wins + losses
// 2. determine the winner based on choices
// 3. reset the game

export default function App() {
  
  const [userChoice, setUserChoice] = useState(null); // to choose
  const [computerChoice, setComputerChoice] = useState(null); //to choose
  const [wins, setWins] = useState(0); // to set
  const [losses, setLosses] = useState(0); //to set 
  const [gameState, setGameState] = useState(null); // (win, lose, draw) to update our UI

  useEffect(() => {
    restartGame();
  }, []);

  function restartGame() {
    setGameState(null); //reset
    setUserChoice(null); //reset

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function handleUserChoice(choice) {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);

    //determine the winner

    if (chosenChoice.losesTo === computerChoice.id) {
      // lose
      setLosses(losses => losses + 1);
      setGameState('lose');
    } else if (computerChoice.losesTo === chosenChoice.id) {
      // win
      setWins(wins => wins + 1);
      setGameState('win');
    } else if (computerChoice.id === chosenChoice.id) {
      // draw
      setGameState('draw');
    }
  }

  function renderComponent(choice) {
    const Component = choice.component; // Paper, Stone, Scissors
    return <Component />;
  }  

  return(
    <div className='app'> 
      {/* information goes here */}

    <div className='info'>
  <h2> Stone-Paper-Scissors </h2>
          {/*wins vs losses states*/}
  
  <div className='wins-losses'>
  
  <div className='wins'>
      <span className="number">{wins}</span>
      <span className="text">{wins === 1 ? 'Win' : 'Wins'}</span> {/*only for 1 win */}
  </div>
  <div className='losses'>
      <span className="number">{losses}</span>
            <span className="text">{losses === 1 ? 'Loss' : 'Losses'}</span> {/*only for 1 loss */}
  </div>

  </div>

  </div>
  <div className="main">

  {/* the popup to show win/lose/draw */}
      {gameState && (
        <div
          className={`game-state ${gameState}`}
          onClick={() => restartGame()}>
          
          <div>

            <div className="game-state-content">
              <p>{renderComponent(userChoice)}</p>
              {/* <p>you {gameState}!</p> */}
              {gameState === 'win' && <p>Congrats! You won!</p>}
              {gameState === 'lose' && <p>Sorry! You lost!</p>}
              {gameState === 'draw' && <p>You drew!</p>}

              <p>{renderComponent(computerChoice)}</p>
            </div>

            <button>Play Again</button>
          </div>
        </div>
      )}
        <div className="info-2">
          <div className="one">Stone</div>
          <div className="two">Paper</div>
          <div className="three">Scissors</div>
      </div>


      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}> <Stone />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}> <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}><Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
      <div className="info-2">
        <div className="four">Computer</div>
        </div> 
    </div>

    </div>

  ); 
}


