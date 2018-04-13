import React, { Component } from "react";
import "./TodoInput.css";
// import axios from "axios";
// import App from "../../containers/App";
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
  componentWillReceiveProps() {}
  componentDidMount() {
    console.log(this.props);
    // TASKS---
    //READ
    // axios.get("http://localhost:3000/api/tasks").then(response => {
    //   this.setState({ tasks: response });
    //   console.log("All task", this.state.tasks.data.data);
    // });
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
    // const sendTask = this.state.newTask;
    // console.log("send", sendTask);
    // axios
    //   .post("http://localhost:3000/api/tasks", { taskData })
    //   .then(response => {
    //     console.log(response);
    //   });
    //DELETE
    // const dataToDelete = {
    //   id: "5ac7ab672b9f5c093f8c0349"
    // };
    // axios
    //   .delete("http://localhost:3000/api/tasks", {
    //     data: {
    //       dataToDelete
    //     }
    //   })
    //   .then(response => {
    //     console.log(response);
    //   });
    // USERS--
    // READ
    // axios.get("http://localhost:3000/api/users").then(response => {
    //   console.log("Response", response.data.data);
    // CREATE
    //   const userData = {
    //     firstName: "Alain",
    //     lastName: "Quiroz",
    //     phones: ["3471857195", "7541915091"],
    //     emails: ["alain@mail.com", "victor@correo.com"]
    //   };
    //   // const sendUser = this.state.newTask;
    //   // console.log("send", sendTask);
    //   axios
    //     .post("http://localhost:3000/api/users", { userData })
    //     .then(response => {
    //       console.log(response);
    //     });
    // });
    //DELETE
    // const dataToDelete = {
    //   id: "5ac7dc757f21d252dfa2fe2d"
    // };
    // axios
    //   .delete("http://localhost:3000/api/users", {
    //     data: {
    //       dataToDelete
    //     }
    //   })
    //   .then(response => {
    //     console.log(response);
    //   });
  }
  componentDidUpdate() {
    console.log(this.props);
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
