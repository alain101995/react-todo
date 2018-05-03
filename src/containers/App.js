import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actions/index";

const mapStateToProps = state => {
  const tasks = state;
  return { tasks };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => {
      dispatch(actions.getTasks());
    },
    getUsers: () => {
      dispatch(actions.getUsers());
    },
    createTasks: taskData => {
      console.log("TASK DATA CONTAINER", taskData);
      dispatch(actions.createTasks(taskData));
    },
    deleteTasks: taskID => {
      dispatch(actions.deleteTasks(taskID));
    }
    // createUsers: () => {
    //   dispatch(actions.createUsers());
    // },
    // deleteUsers: () => {
    //   dispatch(actions.deleteUsers());
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
