import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actions/index";

const mapStateToProps = state => {
  const tasks = state;
  // const createTasks = state;
  return {
    // tasks: state.tasks
    tasks
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
