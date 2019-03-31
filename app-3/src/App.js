import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
     array : ['spaghetti ' , 'ice cream ' , 'sushi ', 'bologno ','cheese '],
     display: ""

    };
  }
  handleChange(value){
    this.setState({display : value});

  }
  render() {
    let arrayDisplay = this.state.array
    .filter((element) => {
      return element.includes(this.state.display);
    })
    .map((element) => {
      return <h2>{element}</h2>
    } );
    
    return (
    
    <div className="App">
    <input type = "text" placeholder = "type here" onChange = {(event) => this.handleChange(event.target.value)}></input>
    {arrayDisplay} 
    </div>
    );

  }
}

export default App;
