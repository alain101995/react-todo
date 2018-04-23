import React, { Component } from "react";
import TodoInput from "../TodoInput/TodoInput";
import "./TaskList.css";
let todos = [
  {
    todoTitle: "Refactor",
    todoResponsible: "Victor",
    todoDescription: "Todo description",
    todoPriority: "low"
  },
  {
    todoTitle: "Design",
    todoResponsible: "Alain",
    todoDescription: "Todo description",
    todoPriority: "medium"
  }
];

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      tasks: []
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }
  componentWillMount() {
    // this.props.getTasks();
  }

  componentDidUpdate() {
    console.log("State tasks", this.state.tasks);
  }

  componentWillReceiveProps(nextProps) {
    console.log("NEXT PROPS", nextProps);
    if (nextProps.tasks.Tasks.tasks) {
      this.setState({ tasks: nextProps.tasks.Tasks.tasks[0] });
    }
  }
  componentDidMount() {
    console.log("State tasks", this.state.tasks);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className="container">
        <TodoInput onAddTodo={this.handleAddTodo} />
        <hr />
        <h4>
          Todo Count: <span>{this.state.tasks.length}</span>
        </h4>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li className="list-group-item" key={index}>
              <h4>
                {task.title}{" "}
                <small>
                  <span>{task.priority}</span>
                </small>
              </h4>
              <p>
                <span aria-hidden="true" /> {task.userID}
              </p>
              <p>{task.description}</p>
              <button onClick={() => this.handleRemoveTodo(index)}>
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

export default TaskList;
