import React, { Component } from "react";
import "./style.css";
import Welcome from "../Welcome/index";
import Door from "../Door/index";
import Candle from '../Candle/index'

class App extends Component {
  constructor(){
    super();
    this.state = {
      doorOpen: false
    }
    this.toggleDoor = this.toggleDoor.bind(this)
  }

  toggleDoor(){
    this.setState({
      doorOpen: !this.state.doorOpen
    })
  }

  render() {
    return (
      <div className="App-content">
        <Welcome who="Ada" messageColor="#fff" />
        <Door open={this.state.doorOpen}>
         <Candle/>
        </Door>
        <div className="buttonsPanel">
          <button onClick={this.toggleDoor}>
            Alohomora!
          </button>
          <button onClick={()=>{console.log("Candle is up!")}}>
            Wingardium Leviosa!
          </button>
          <button onClick={()=>{console.log("Candle is lit up!")}}>
            Lumos!
          </button>
        </div>
        <div class="lastSpell">
           Last casted spell: Wingardium Leviosa
        </div>
      </div>
    );
  }
}

export default App;
