import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';

function App():JSX.Element {
  function Rolldie(){
    let rolled: number=Math.floor(Math.random()*6+1)
    alert('You rolled a '+rolled);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Click on the button to roll the die
        </p>
        <button onClick={this.Rolldie()}> Roll Me!</button>
      </header>
    </div>
  );
}

export default App;
