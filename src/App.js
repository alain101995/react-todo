import React, { Component } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // todos: [],
      tasks: [],
      users: []
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }
  componentWillMount() {
    this.props.getTasks();
    this.props.getUsers();
  }

  componentDidUpdate() {
    console.log("State tasks", this.state.tasks);
    // this.props.getTasks();
  }

  componentWillReceiveProps(nextProps) {
    console.log("NEXT PROPS", nextProps);
    if (nextProps.tasks.Tasks.tasks) {
      this.setState({ tasks: nextProps.tasks.Tasks.tasks[0] });
    }
    if (nextProps.tasks.Users.users) {
      this.setState({ users: nextProps.tasks.Users.users[0] });
    }
  }
  componentDidMount() {
    console.log("State tasks", this.state.tasks);
  }

  handleAddTodo(todo) {
    console.log("TODO SPECS", todo);
    this.props.createTasks(todo);
    this.setState({ tasks: [...this.state.tasks, todo] });
    console.log("New todos", this.state.tasks);
  }

  handleRemoveTodo(index, taskID) {
    console.log("Index", index, taskID);
    console.log("Todos and tasks", this.state.tasks, this.state.todos);
    // this.props.deleteTasks(taskID)
    // this.setState({
    //   tasks: [...this.state.tasks].splice(index)
    // })
    // this.props.deleteTasks(taskID)
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index;
      })
    });

    this.props.deleteTasks(taskID);
  }

  render() {
    return (
      <div className="container">
        <TodoInput onAddTodo={this.handleAddTodo} users={this.state.users} />
        <hr />
        <h4>
          Todo Count: <span>{this.state.tasks.length}</span>
        </h4>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li className="list-group-item" key={index}>
              <h4>
                {task.title} <br />
                <small>
                  <span>
                    {"Priority: " +
                      task.priority +
                      " " +
                      "Due Date: " +
                      task.dueDate}
                  </span>
                </small>
                <br />
                <small>
                  <span>
                    {"Creation Date: " +
                      task.createdDate +
                      " " +
                      "Completed: " +
                      task.completed}
                  </span>
                </small>
              </h4>
              <p>
                <span aria-hidden="true" /> {task.userID}
              </p>
              <p>{task.description}</p>
              <button
                onClick={() => {
                  this.handleRemoveTodo(index, task._id);
                  this.props.getTasks();
                }}
              >
                <span aria-hidden="true" /> Delete
              </button>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    );
  }
}

export default App;
