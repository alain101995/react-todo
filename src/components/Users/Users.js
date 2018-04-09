import React, { Component } from "react";
import "./Users.test";
import axios from "axios";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {}
  handleSubmit(event) {}
  componentDidUpdate() {
    console.log(this.state.todoTitle);
  }
  render() {
    return (
      <div>
        <h4>Add New User</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-sm-2 control-label">First Name</label>
            <div className="col-sm-10">
              <input
                name="firstName"
                type="text"
                className="form-control"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Last Name</label>
            <div className="col-sm-10">
              <input
                name="lastName"
                type="text"
                className="form-control"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Phone number</label>
            <div className="col-sm-10">
              <input
                name="phone"
                type="number"
                className="form-control"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input
                name="email"
                type="email"
                className="form-control"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit">Add User</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
