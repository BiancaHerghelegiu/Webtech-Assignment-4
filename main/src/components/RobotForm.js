import React, { Component } from "react";

class RobotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      mass: ""
    };
 
    this.handleChangeType=(event)=>{
        this.setState({
            type:event.target.value
            });
    }
     this.handleChangeName=(event)=>{
        this.setState({
            name:event.target.value
            });
    }
     this.handleChangeMass=(event)=>{
        this.setState({
            mass:event.target.value
            });
    }
  }
  render() {
    return (
      <div>
        <input type="text" id="type" value={this.state.type} placeholder="Type" onChange={event=>this.handleChangeType(event)} />
        <input type="name" id="name" value={this.state.name} placeholder="Name" onChange={event=>this.handleChangeName(event)} />
        <input type="text" id="mass" value={this.state.mass} placeholder="Mass" onChange={event=>this.handleChangeMass(event)} />
        <input
          type="button"
          value="add"
          onClick={() =>
            this.props.onAdd({
              name: this.state.name,
              type: this.state.type,
              mass: this.state.mass
            })
          }
        />
      </div>
    );
  }
}

export default RobotForm;