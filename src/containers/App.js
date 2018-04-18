import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actions/index";
import { Tasks } from "../reducers/tasks";

const mapStateToProps = state => {
  const tasks = state;
  // console.log("STATES ACTION", tasks, createTasks);
  return {
    tasks
    // tasks
    // createTasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => {
      dispatch(actions.getTasks());
    },
    createTasks: () => {
      dispatch(actions.createTask());
    },
    deleteTasks: () => {
      dispatch(actions.deleteTask());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
