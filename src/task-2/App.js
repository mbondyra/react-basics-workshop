import React, { Component } from "react";
import "./App.css";
import Header from "./Header/index";
import Content from "./Content/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-bg" />
        <Content />
      </div>
    );
  }
}

export default App;
