import React, { Component } from "react";
import "./Users.css";

const localPhones = [];
const localEmails = [];
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
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleSubmit(event) {
    console.log("A name was submitted: ", this.state);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(
      "event.target.name]: event.target.value ",
      event.target.name,
      event.target.value
    );
  }
  handlePhone() {
    console.log("REF Phone", this.refs.phoneRef.value);
    localPhones.push(this.refs.phoneRef.value);
    console.log("Local phones", localPhones);
    this.setState({
      phones: localPhones
    });
  }
  handleEmail() {
    localEmails.push(this.refs.emailRef.value);
    console.log("Local emails", localEmails);
    this.setState({
      emails: localEmails
    });
  }
  componentDidUpdate() {
    // console.log("State phone email", this.state.emails, this.state.phones);
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
          <button type="button" onClick={this.handlePhone}>
            Save phone
          </button>
        </label>

        <label>
          Emails:
          <input
            ref="emailRef"
            type="text"
            name="emails"
            // value={this.state.phones}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleEmail}>
            Save email
          </button>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Users1;
