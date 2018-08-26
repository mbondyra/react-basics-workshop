import React, { Component } from "react";
import "./style.css";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="title">Elixirs' class</div>
        <div className="message" style={{color: this.props.messageColor}}>
          This is your first elixirs' class, {this.props.who} <br />
        </div>
      </div>
    );
  }
}

export default Welcome;