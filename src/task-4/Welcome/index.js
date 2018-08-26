import React, { Component } from "react";
import "./style.css";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="title">Spells class</div>
        <div className="message" style={{color: this.props.messageColor}}>
          This is your spells class, {this.props.who} <br />
        </div>
      </div>
    );
  }
}

export default Welcome;