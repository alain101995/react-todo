import axios from "axios";
import {
  SHOW_USERS,
  CREATE_USERS,
  DELETE_USERS
} from "../constants/actionTypes";

const userData = {
  // taskID: 1,
  firstName: "Alain",
  lastName: "Quiroz",
  phones: ["3471857195", "7541915091"],
  emails: ["alain@mail.com", "victor@correo.com"]
};
const userID = {
  id: "5ac7ab672b9f5c093f8c0349"
};

export const getUsers = () => {
  return (dispatch, getState) => {
    axios
      .get("http://localhost:3000/api/users")
      .then(response => {
        dispatch({ type: SHOW_USERS, payload: response.data.data });
      })
      .catch(err => console.log(err));
  };
};

export const createUser = () => {
  return (dispatch, getState) => {
    axios
      .post("http://localhost:3000/api/users", { userData })
      .then(response => {
        // console.log("RESPONSE", response.data);
        dispatch({ type: CREATE_USERS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};

export const deleteUser = () => {
  return (dispatch, getState) => {
    axios
      .delete("http://localhost:3000/api/users", { userID })
      .then(response => {
        dispatch({ type: DELETE_USERS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};
