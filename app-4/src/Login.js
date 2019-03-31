import React, { Component } from "react"

class Login extends Component {
  constructor(){
    super();
    this.state = {
      Username: "",
      Password: ""
    };
    this.alertMessage = this.alertMessage.bind(this)
  }

  handleUsername(value){
    console.log(value)
    this.setState({
      Username : value
    });

  }
  handlePassword(value){
    console.log(value)
    this.setState({
      Password : value
    })

  }

  alertMessage(){
    alert(`Username: ${this.state.Username} Password: ${this.state.Password}`);
    
  }
    render() {
      return (
        <div className="App">
          <input placeholder="username" onChange={(e) => this.handleUsername(e.target.value)
          }/>
          <input type = "text "placeholder="password" onChange={(e) => this.handlePassword(e.target.value)
          }/>
          <button onClick={this.alertMessage}>Login</button>
          
        </div>
      );
    }
  }


export default Login