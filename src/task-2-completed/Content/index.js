import React, { Component } from "react";
import letter from "./letter-uncovered.jpg";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App-content">
        <div className="title">A letter to...</div>
        <div className="message">
          <span role="img" aria-label="padlock">
            🔏
          </span>{" "}
          <br />
          Hey! You got a letter from Hogwarts! <br />
          Open it by changing the path to the img file to `letter-uncovered.jpg`
        </div>
        <img src={letter} className="letter" alt="letter" />
      </div>
    );
  }
}

export default App;
