import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue : ""
    };
    
  }
  handleChange(value){
    this.setState({ inputValue: value});

  }

  render() {
    return (
      <div className = "App">
      <input type="text" placeholder = "type here" onChange = {(event) => this.handleChange(event.target.value)}/>
      <p>{this.state.inputValue}</p>
      </div>
    );
  }
}

export default App;
