import React, { Component } from "react";
import ToDo from "./ToDo";
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      list :[]
    };

    this.addButton = this.addButton.bind(this);

  }


  addButton(task){
    this.setState({
      list : [...this.state.list, task]
      
    });
  }
  render() {
    return (
      <div className="App">
        <h1>toDo List</h1>
          
            <NewTask adds={this.addButton}/>
            <List tasks = {this.state.list}/>
      </div>
    );
  }
}

export default App;
