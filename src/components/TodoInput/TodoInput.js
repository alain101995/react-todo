import React, { Component } from "react";
import "./TodoInput.css";
import { Link } from "react-router-dom";
class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userData: {
      todoTitle: "",
      todoResponsible: "",
      todoDescription: "",
      todoPriority: "Lowest",
      tasks: ""
      // }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log("NAME", name);
    // this.setState({ [event.target.name]: event.target.value })
    // console.log("Target values", event.target.name, event.target.value);
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: "",
      todoResponsible: "",
      todoDescription: "",
      todoPriority: "Lowest"
    });
  }
  componentWillReceiveProps() {}

  componentDidUpdate() {
    console.log(this.props);
  }
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
                name="todoTitle"
                type="text"
                className="form-control"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Responsible</label>
            <div className="col-sm-10">
              <input
                name="todoResponsible"
                type="text"
                className="form-control"
                value={this.state.todoResponsible}
                onChange={this.handleInputChange}
                placeholder="Responsible"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <textarea
                name="todoDescription"
                className="form-control"
                rows="2"
                value={this.state.todoDescription}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Priority</label>
            <div className="col-sm-10">
              <select
                name="todoPriority"
                className="form-control"
                value={this.state.todoPriority}
                onChange={this.handleInputChange}
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
