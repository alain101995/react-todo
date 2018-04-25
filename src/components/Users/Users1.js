import React, { Component } from "react";
import "./Users.css";

let localPhones = [];
class Users1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phones: [],
      emails: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
  }
  handleSubmit(event) {
    console.log("A name was submitted: ", this.state);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handlePhone() {
    localPhones.push("Local phone");
    console.log("Local phones", localPhones);
    this.setState({
      phones: localPhones
    });
  }
  componentDidUpdate() {
    console.log("State phone email", this.state.emails, this.state.phones);
  }
  dataToSend() {
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phones: this.state.phones,
      emails: this.state.emails
    };
    console.log("USER DATA", userData);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            ref="phoneRef"
            type="text"
            name="phones"
            // value={this.state.phones}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="emails"
            value={this.state.emails}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <button type="button" onClick={this.handlePhone}>
          Save phone
        </button>
      </form>
    );
  }
}

export default Users1;
