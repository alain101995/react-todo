import axios from "axios";
import {
  SHOW_TASKS,
  CREATE_TASKS,
  DELETE_TASKS
} from "../constants/actionTypes";

const taskData = {
  // taskID: 1,
  userID: 1,
  title: "To code",
  description: "Code",
  dueDate: "2018-12-22T08:15:00Z",
  createdDate: "2017-12-22T08:15:00Z",
  completedDate: "2018-11-22T08:15:00Z",
  completed: false
};

const taskID = {
  id: "5ac7ab672b9f5c093f8c0349"
};

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

export const createTask = () => {
  return (dispatch, getState) => {
    axios
      .post("http://localhost:3000/api/tasks", { taskData })
      .then(response => {
        // console.log("RESPONSE", response.data);
        dispatch({ type: CREATE_TASKS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};

export const deleteTask = () => {
  return (dispatch, getState) => {
    axios
      .delete("http://localhost:3000/api/tasks", { taskID })
      .then(response => {
        dispatch({ type: DELETE_TASKS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};
