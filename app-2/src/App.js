import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
     array : ['spaghetti ' , 'ice cream ' , 'sushi ', 'bologno ','cheese '],

    };
  }
  render() {
    let arrayDisplay = this.state.array.map((element) => {
      return <h2>{element}</h2>
    } );
    return (
      <div className="App">{arrayDisplay} </div>
    );
  }
}

export default App;
