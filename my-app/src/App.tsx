import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <button onClick={()=>Rolldie()}> Roll Me!</button>
      </header>
    </div>
  );
}

export default App;
