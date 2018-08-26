import React, { Component } from "react";
import reactLogo from "./images/react-logo.svg";
import adaLogo from "./images/ada-logo.jpeg";
import letter from "./images/letter-uncovered.jpg";
import "./App.css";

// we'll be modifying code here:

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <img src={reactLogo} className="App-logo" alt="react-logo" />
            workshop with a bit of magic
            <img src={adaLogo} className="App-logo Ada-logo" alt="ada-logo" />
          </h1>
        </header>
        <div className="App-bg" />
        <div className="App-content">
          <div className="title">A letter to me</div>
          <div className="message">
            <span role="img" aria-label="padlock">
              🔏
            </span>{" "}
            <br />
            Hey! You got a letter from Hogwarts! <br />
            Open it by changing the path to the img file to
            `letter-uncovered.jpg`
          </div>
          <img src={letter} className="letter" alt="letter" />
        </div>
      </div>
    );
  }
}

export default App;
