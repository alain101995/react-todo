import React, { Component } from "react";
import "./Users.css";

let localEmails = "";
let localPhones = [];
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
  componentDidUpdate() {
    console.log(this.state.emails);
    console.log("Local emails", localEmails);
  }

  addToForm() {
    console.log("Added Email or Phone");
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // this.setState({ [event.target.name]: event.target.value })
    // console.log("Target values", event.target.name, event.target.value);
    if (name === "emails" || name === "phones") {
      this.setState(prevState => ({
        [name]: [...prevState["emails"], value]
      }));

      // localEmails.push(value);
      // this.state.emails.push(...this.state.emails, value);
      // console.log("States", this.state);
    }
    // else {
    //   this.setState({ [name]: value });
    // }
  }

  addEmail(email) {
    // console.log("ADD Email", email);
    // this.setState(prevState => ({
    //   emails: [...prevState.emails, email]
    // }));
    // this.state.emails.push(email);
    this.setState(prevState => ({
      emails: [...prevState.emails, localEmails]
    }));
    // this.setState(
    //   prevState => (
    //     {
    //       emails: [...prevState.emails, email]
    //     },
    //     // prevState = the whole state list
    //     console.log("prevstate", prevState.emails),
    //     console.log("New emails", this.state.emails)
    //   )
    // );
  }

  saveUser() {
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phones: this.state.phones,
      emails: this.state.emails
    };
    console.log("User DATA", userData);
    // this.props.createUser(userData);
  }
  render() {
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
          <label className="col-sm-2 control-label">Phone</label>
          <div className="col-sm-10">
            <input
              name="phones"
              type="text"
              className="form-control"
              value={this.state.todoTitle}
              onChange={this.handleInputChange}
              placeholder="+1 (999) 999 9999"
            />
            {/* {this.state.phones.map(phones => {
              return (
                <div>
                  <h1>{phones}</h1>
                  <span className="input-group-btn">
                    <button
                      className="btn btn-danger btn-remove-phone"
                      type="button"
                    >
                      <span className="glyphicon glyphicon-remove-circle" />
                    </button>
                  </span>
                </div>
              );
            })} */}
            <button
              type="button"
              className="btn btn-success btn-sm btn-add-phone"
            >
              <span className="glyphicon glyphicon-plus" /> Add Phone
            </button>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input
              name="emails"
              type="text"
              className="form-control"
              value={this.state.todoTitle}
              onChange={this.handleInputChange}
              placeholder="example@mail.com"
            />
            {/* {this.state.emails.map((email, index) => {
              return (
                <div key={index}>
                  <h1>{email}</h1>
                  <span className="input-group-btn">
                    <button
                      className="btn btn-danger btn-remove-phone"
                      type="button"
                    >
                      <span className="glyphicon glyphicon-remove-circle" />
                    </button>
                  </span>
                </div>
              );
            })} */}
            <button
              type="button"
              className="btn btn-success btn-sm btn-add-phone"
              onClick={() => this.addEmail(this.state.emails)}
            >
              <span className="glyphicon glyphicon-plus" /> Add Email
            </button>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button>Add User</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
