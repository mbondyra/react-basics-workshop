import React, { Component } from "react";
import "./style.css";
import "./potions.css";
import Welcome from '../Welcome/index'
import Potion from '../Potion/index'

class App extends Component {
  render() {
    return (
      <div className="App-content">
        <Welcome who="Name" messageColor="#fff" />
        <div className="potions">
          <Potion label="veritaserum" color="green"/>
          <Potion label="felis felisis" color="pink"/>
          <Potion label="Amortentia" color="gold"/>
          <Potion/>
        </div>
      </div>
    );
  }
}

export default App;
