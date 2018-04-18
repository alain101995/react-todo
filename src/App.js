import React, { Component } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import axios from "axios";
import "./App.css";
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

class App extends Component {
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
    this.props.createTasks();
    this.props.getTasks();
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
      // <div className="container">
      //   <TodoInput onAddTodo={this.handleAddTodo} />
      //   <hr />
      //   <h4>
      //     Todo Count: <span>{this.state.tasks.length}</span>
      //   </h4>
      //   <ul>
      //     {this.state.todos.map((todo, index) => (
      //       <li className="list-group-item" key={index}>
      //         <h4>
      //           {todo.todoTitle}{" "}
      //           <small>
      //             <span>{todo.todoPriority}</span>
      //           </small>
      //         </h4>
      //         <p>
      //           <span aria-hidden="true" /> {todo.todoResponsible}
      //         </p>
      //         <p>{todo.todoDescription}</p>
      //         <button onClick={() => this.handleRemoveTodo(index)}>
      //           <span aria-hidden="true" /> Delete
      //         </button>
      //       </li>
      //     ))}
      //   </ul>
      //   <hr />
      // </div>
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

// <div className="ui-g-12">
//   {this.state.userStripe &&
//     this.state.userStripe.subscriptions.data.length > 0 &&
//     this.state.planlist.map(plan => {
//       console.log(plan);
//       if (this.state.userStripe.subscriptions.data[0].plan.id !== plan.id) {
//         return (
//           <div key={plan.id} className="ui-g-4 ui-md-12 ui-lg-6 pricing-list">
//             <div className="ui-card-shadow">
//               <div className="pricing-title">{plan.name}</div>
//               <div>
//                 <ul>
//                   <li className="pricing-cost">$ {plan.amount / 100}</li>
//                   <li> {plan.metadata.syncs_limit} Synchs</li>
//                   {plan.metadata.execution_limit}
//                   <li>Executions</li>
//                 </ul>
//               </div>
//               <button
//                 className="primary-button"
//                 onClick={() => this.updatePlan(plan.id)}
//                 disabled={this.state.userStripe.sources.data.length === 0}
//               >
//                 <i className="fa fa-check mr-5" />
//                 Update plan!
//               </button>
//             </div>
//           </div>
//         );
//       }
//     })}
// </div>;

export default App;
