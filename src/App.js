import React, { Component } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import axios from "axios";
import "./App.css";

var todos = [
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      tasks: undefined
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  componentDidMount() {
    // axios
    //   .get("http://localhost:3000/api/tasks")
    //   .then(response => {
    //     this.setState({ tasks: response });
    //     console.log("All task", this.state.tasks.data.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  handleAddTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
    console.log("New todos", this.state.todos);
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
          Todo Count: <span>{this.state.tasks && this.state.tasks.length}</span>
        </h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li className="list-group-item" key={index}>
              <h4>
                {todo.todoTitle}{" "}
                <small>
                  <span>{todo.todoPriority}</span>
                </small>
              </h4>
              <p>
                <span aria-hidden="true" /> {todo.todoResponsible}
              </p>
              <p>{todo.todoDescription}</p>
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

export default App;
