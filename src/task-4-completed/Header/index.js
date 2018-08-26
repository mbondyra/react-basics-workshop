import React, { Component } from "react";
import reactLogo from "./react-logo.svg";
import adaLogo from "./ada-logo.jpeg";
import "./style.css";

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <h1>
            <img src={reactLogo} className="App-logo" alt="react-logo" />
            workshop with a bit of magic
            <img src={adaLogo} className="App-logo Ada-logo" alt="ada-logo" />
          </h1>
        </header>
    );
  }
}

export default Header;
