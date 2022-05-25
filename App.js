import logo from './logo.svg';
import './App.css';
import hangman from './hangman.png'
import React, {Component} from 'react';


function clickMe(){
}

function App() {
  return (
    

    <div className="App">
      <header className="App-header">
        The Hangman Game

        <img src={hangman} className="App-logo" alt="hangman" />

        <button className="button" onClick={clickMe}>
        Click to play!
      </button>
      </header>

      <header className="image">
        
      </header>
      
      
    </div>











  );
}

export default App;
