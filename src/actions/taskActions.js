import axios from "axios";
import {
  SHOW_TASKS,
  CREATE_TASKS,
  DELETE_TASKS
} from "../constants/actionTypes";

// const taskData = {
//   // userID: 1,
//   title: "To code",
//   description: "Code",
//   priority: "Low",
//   dueDate: "2018-12-22T08:15:00Z",
//   createdDate: "2017-12-22T08:15:00Z",
//   completedDate: "2018-11-22T08:15:00Z",
//   completed: false
// };

export const getTasks = () => {
  return (dispatch, getState) => {
    axios
      .get("http://localhost:3000/api/tasks")
      .then(response => {
        dispatch({ type: SHOW_TASKS, payload: response.data.data });
      })
      .catch(err => console.log(err));
  };
};

export const createTasks = taskData => {
  return (dispatch, getState) => {
    axios
      .post("http://localhost:3000/api/tasks", { taskData })
      .then(response => {
        dispatch({ type: CREATE_TASKS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};

export const deleteTasks = taskID => {
  return (dispatch, getState) => {
    axios
      .delete("http://localhost:3000/api/tasks", { data: { taskID } })
      .then(response => {
        dispatch({ type: DELETE_TASKS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};
