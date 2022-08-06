import React from "react";
import './App.css';
import heart from "./heart.png";

function App() {
  return (
    <>
    <title>Jackson Buchmeyer</title>
    <div className="App">
      <header className="App-header">
        <img src={heart} className="Heart-logo" alt="heart" />
      </header>
    </div>
    </>
  );
}

export default App;
