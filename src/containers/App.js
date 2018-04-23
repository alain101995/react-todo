import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actions/index";

const mapStateToProps = state => {
  const tasks = state;
  return {
    tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => {
      dispatch(actions.getTasks());
    },
    createTasks: () => {
      dispatch(actions.createTasks());
    },
    deleteTasks: () => {
      dispatch(actions.deleteTasks());
    },
    getUsers: () => {
      dispatch(actions.getUsers());
    },
    createUsers: () => {
      dispatch(actions.createUsers());
    },
    deleteUsers: () => {
      dispatch(actions.deleteUsers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
