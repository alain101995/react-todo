import axios from "axios";
import { SHOW_TASKS } from "../constants/actionTypes";

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
