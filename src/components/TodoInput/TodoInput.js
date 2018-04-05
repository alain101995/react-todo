import React, { Component } from "react";
import "./TodoInput.css";
import axios from "axios";
class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: "",
      todoResponsible: "",
      todoDescription: "",
      todoPriority: "Lowest",
      tasks: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
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
  componentDidMount() {
    //READ
    // axios
    //   .get("http://localhost:3000/api/tasks")
    //   .then(response => {
    //     this.setState({ tasks: response });
    //     console.log("All task", this.state.tasks.data.data);
    //   })
    // .catch(error => {
    //     console.log(error);
    //   });
    // CREATE
    // const taskData = {
    //   // taskID: 1,
    //   userID: 1,
    //   title: "To code",
    //   description: "Code",
    //   dueDate: "2018-12-22T08:15:00Z",
    //   createdDate: "2017-12-22T08:15:00Z",
    //   completedDate: "2018-11-22T08:15:00Z",
    //   completed: false
    // };
    // axios
    //   .post("http://localhost:3000/api/tasks", { taskData })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    //DELETE
    // const dataToDelete = {
    //   id: "5ac53edaa6e4bf12c6280421"
    // };
    // axios
    //   .delete("http://localhost:3000/api/tasks", dataToDelete)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
  componentDidUpdate() {
    console.log(this.state.todoTitle);
  }
  render() {
    return (
      <div>
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
