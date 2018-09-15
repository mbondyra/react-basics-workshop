import React, { Component } from "react";
import "./style.css";
import Welcome from "../Welcome/index";
import Door from "../Door/index";
import Wand from "../Wand";

class App extends Component {
  constructor(){
    super();
    this.state = {
      doorOpen: false,
      wandRaised: false
    }
    this.toggleDoor = this.toggleDoor.bind(this)
    this.raiseWand = this.raiseWand.bind(this)
    this.lowerWand = this.lowerWand.bind(this)
  }

  toggleDoor(){
    this.setState({
      doorOpen: !this.state.doorOpen
    })
  }

  raiseWand(){
    this.setState({
      wandRaised: true
    })
  }

  lowerWand(){
    this.setState({
      wandRaised: false
    })
  }

  render() {
    return (
      <div className="App-content">
        <Welcome who="Ada" messageColor="#fff" />
        <Door open={this.state.doorOpen}/>
        <div onClick={this.toggleDoor} onMouseEnter={this.raiseWand} onMouseLeave={this.lowerWand}>
          <Wand active={this.state.wandRaised}  spellCasting={this.state.doorOpen}/>
        </div>
      </div>
    );
  }
}

export default App;
