import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage = {"https://i.pinimg.com/originals/a7/c9/89/a7c989f0791962f318f291110b7dc99f.jpg"} />
      </div>
    );
  }
}

export default App;
