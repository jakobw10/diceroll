import React from 'react';
import './App.css';

function App() {
  function Rolldie():number{
    return Math.floor(Math.random()*6+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Click on the button to roll the die
        </p>
        <button > Roll Me!</button>
      </header>
    </div>
  );
}

export default App;
