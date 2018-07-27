import React, { Component } from 'react';
import logo from './images/react-logo.svg';
import './App.css';

// we'll be modifying code here:

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <p className="App-content">
          I'm so happy to be here with you :)
          <div>Change the background of this container to black with inline styles</div>
          <div>Change the background of this container to black with targetting by class</div>
          <div>Cchange the background of this container to black with targetting by id</div>
        </p>
      </div>
    );
  }
}

export default App;
