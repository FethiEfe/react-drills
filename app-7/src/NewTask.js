import React, {Component} from "react"


class NewTask extends Component{
    constructor() {
        super();
        this.state = {
         input: ''
        };
        this.handleAdd = this.handleAdd.bind(this);
    };

    getInput(value){
        this.setState({
            input:value
        });

    }

    handleAdd() {
        this.props.adds(this.state.input);
        this.setState({ input: "" });
    }

    render(){
        return (
            <div >
                 <input value = {this.state.input} placeholder = "Add New Task" onChange = {(e) => this.getInput(e.target.value)}/>
                 <button onClick = {this.handleAdd}>Add</button>
            </div>
        );

    }
}

export default NewTask