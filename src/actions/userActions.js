import axios from "axios";
import {
  SHOW_USERS,
  CREATE_USERS,
  DELETE_USERS
} from "../constants/actionTypes";

const userID = {
  _id: "5ada5526f335a40eaca0ec2c"
};

export const getUsers = () => {
  return (dispatch, getState) => {
    axios
      .get("http://localhost:3000/api/users")
      .then(response => {
        console.log("USER LIST", response);
        dispatch({ type: SHOW_USERS, payload: response.data.data });
      })
      .catch(err => console.log(err));
  };
};

export const createUsers = userData => {
  console.log("User Data, HERE", userData);
  return (dispatch, getState) => {
    axios
      .post("http://localhost:3000/api/users", { userData })
      .then(response => {
        dispatch({ type: CREATE_USERS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};

export const deleteUsers = () => {
  return (dispatch, getState) => {
    axios
      .delete("http://localhost:3000/api/users", { data: { userID } })
      .then(response => {
        dispatch({ type: DELETE_USERS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};
