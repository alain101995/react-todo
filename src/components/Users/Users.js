import React, { Component } from "react";
import "./Users.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phones: [],
      emails: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // this.setState({ [event.target.name]: event.target.value })
    // console.log("Target values", event.target.name, event.target.value);
    this.setState({ [name]: value });
  }

  componentDidUpdate() {
    console.log(this.state.todoTitle);
  }

  addToForm() {
    console.log("Added Email or Phone");
  }

  saveUser() {
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phones: this.state.phones,
      emails: this.state.emails
    };
    // this.props.createUser(userData);
  }
  render() {
    let localMails = [];
    let localPhones = [];
    return (
      <div>
        <h4>Add New User</h4>
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
            <button className="mt-3" onClick={this.addToForm()}>
              Add Phone
            </button>
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
            <button className="mt-3" onClick={this.addToForm()}>
              Add Email
            </button>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button>Add User</button>
          </div>
        </div>
        {/* <span class="input-group-btn">
          <button class="btn btn-danger btn-remove-phone" type="button">
            <span class="glyphicon glyphicon-remove-circle" />
          </button>
        </span> */}
      </div>
    );
  }
}

export default Users;
