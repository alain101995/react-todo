import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TodoInput.css";
class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userData: {
      title: "",
      todoResponsible: "", // Fix this one on backend
      description: "",
      priority: "Lowest",
      createdDate: new Date(),
      dueDate: ""
      // completedDate
      // completed: false
      // }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate() {
    // console.log("STATES", this.state);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log("Name", name);
    console.log("Value", value);
    // this.setState({ [event.target.name]: event.target.value });
    // console.log("Target values", event.target.name, event.target.value);
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      todoResponsible: "",
      description: "",
      priority: "",
      createdDate: new Date(),
      dueDate: ""
    });
  }
  // componentWillReceiveProps(next) {
  //   console.log("Todo input props", this.props);
  // }
  render() {
    return (
      <div>
        <Link to="/users">Add User</Link>
        <h4>Add New Todo</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-sm-2 control-label">Todo</label>
            <div className="col-sm-10">
              <input
                name="title"
                type="text"
                className="form-control"
                value={this.state.title}
                onChange={this.handleInputChange}
                placeholder="Title"
                // required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Responsible</label>
            <div className="col-sm-10">
              <select
                name="todoResponsible"
                className="form-control"
                value={this.state.todoResponsible}
                onChange={this.handleInputChange}
                placeholder="Responsible"
                // required
              >
                {this.props.users &&
                  this.props.users.map((user, index) => {
                    return <option key={index}>{user.firstName}</option>;
                  })}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <textarea
                name="description"
                className="form-control"
                rows="2"
                value={this.state.description}
                onChange={this.handleInputChange}
                // required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Priority</label>
            <div className="col-sm-10">
              <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
                // required
              >
                <option>Lowest</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Highest</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Due Date</label>
            <div className="col-sm-10">
              <input
                name="dueDate"
                type="date"
                className="form-control"
                // min={new Date().getDate()}
                onChange={this.handleInputChange}
                // required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit">Add Todo</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
