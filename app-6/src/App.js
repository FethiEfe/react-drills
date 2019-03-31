import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo"

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      list :[],
      input: ""
    };

    this.addButton = this.addButton.bind(this);

  }

  handleChange(value){
    this.setState({
      input:value
    });
  }

  addButton(){
    this.setState({
      list : [...this.state.list, this.state.input],
      input: ""
    });
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo  task={element} />;
    });
    
    return (
      <div className="App">
        <h1>toDo List</h1>
          <div>
            <input  type = "text" 
             placeholder = "add task here" 
             onChange = {(e) => this.handleChange(e.target.value)}/>
             <button onClick = {this.addButton}>Add Task</button>
          </div>
      
      <br />
      {list}
      </div>
    );
  }
}

export default App;
