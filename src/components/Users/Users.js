import React, { Component } from "react";
import "./Users.css";
import { Link } from "react-router-dom";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      localPhones: [],
      phones: [],
      localEmails: [],
      emails: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  componentDidMount() {
    console.log("Users props", this.props);
    this.props.getUsers();
  }
  componentDidUpdate() {
    console.log("This state", this.state);
  }
  handleSubmit(event) {
    console.log("A name was submitted: ", this.state);
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phones: this.state.phones,
      emails: this.state.emails
    };
    console.log("User to send data", userData);
    this.props.createUser(userData);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log("NAME", name);
    // this.setState({ [event.target.name]: event.target.value })
    // console.log("Target values", event.target.name, event.target.value);
    if (name === "emails" || name === "phones") {
      // this.setState(prevState => ({
      //   [name]: [...prevState["emails"], value]
      // }));
      console.log("HErre");
      this.setState({ [event.target.name]: event.target.value });
    } else {
      console.log("EHRQEr");
      this.setState({ [name]: value });
    }
  }

  handlePhone() {
    this.state.localPhones.push(this.refs.phoneRef.value);
    console.log("Local phones", this.state.localPhones);
    this.setState({
      phones: this.state.localPhones
    });
  }
  handleEmail() {
    this.state.localEmails.push(this.refs.emailRef.value);
    console.log("Local emails", this.state.localEmails);
    this.setState({
      emails: this.state.localEmails
    });
  }
  render() {
    return (
      <div>
        <Link to="/">Todo Input</Link>
        <form onSubmit={this.handleSubmit}>
          <h4>Add New User</h4>
          <div className="form-group">
            <label className="col-sm-2 control-label">First Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="First Name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Last Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Phone</label>
            <div className="col-sm-10">
              <input
                ref="phoneRef"
                type="text"
                name="phones"
                className="form-control"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="+1 (999) 999 9999"
              />
              {this.state.localPhones.map((phones, index) => {
                return (
                  <div key={index}>
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
              })}
              <button
                type="button"
                className="btn btn-success btn-sm btn-add-phone"
                onClick={this.handlePhone}
              >
                <span className="glyphicon glyphicon-plus" /> Add Phone
              </button>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input
                ref="emailRef"
                type="email"
                name="emails"
                className="form-control"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="example@mail.com"
              />
              {this.state.localEmails.map((email, index) => {
                return (
                  <div key={index}>
                    <h1>{email}</h1>
                    <span className="input-group-btn">
                      <button
                        className="btn btn-danger btn-remove-phone"
                        type="button"
                        // onClick={this.state.localEmails.splice(index)}
                      >
                        <span className="glyphicon glyphicon-remove-circle" />
                      </button>
                    </span>
                  </div>
                );
              })}
              <button
                type="button"
                className="btn btn-success btn-sm btn-add-phone"
                onClick={this.handleEmail}
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
        </form>
      </div>
    );
  }
}

export default Users;
