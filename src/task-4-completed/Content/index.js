import React, { Component } from "react";
import "./style.css";
import Welcome from "../Welcome/index";
import Door from "../Door/index";
import Candle from '../Candle/index'

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      doorOpen: false,
      candleUp: false,
      lightOn: false
    }
    this.toggleDoor = this.toggleDoor.bind(this)
    this.toggleCandlePosition = this.toggleCandlePosition.bind(this)
    this.toggleLight = this.toggleLight.bind(this)
  }

  toggleDoor(){
    this.setState({
      doorOpen: !this.state.doorOpen
    })
  }

  toggleCandlePosition(){
    this.setState({
      candleUp: !this.state.candleUp
    })
  }

  toggleLight(){
    this.setState({
      lightOn: !this.state.lightOn
    })
  }

  render() {
    return (
      <div className="App-content">
        <Welcome who="Ada" messageColor="#fff" />
        <Door open={this.state.doorOpen}>
         <Candle fired={this.state.lightOn} up={this.state.candleUp}/>
        </Door>
        <div className="buttonsPanel">
          <button onClick={this.toggleDoor}>
            Alohomora!
          </button>
          <button onClick={this.toggleCandlePosition}>
            Wingardium Leviosa!
          </button>
          <button onClick={this.toggleLight}>
            Lumos!
          </button>
        </div>
        <div className="lastSpell">
           Last casted spell: Wingardium Leviosa
        </div>
      </div>
    );
  }
}

export default App;
