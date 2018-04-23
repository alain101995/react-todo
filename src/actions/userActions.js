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

export const createUsers = () => {
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
    console.log("HEREQPOUWHECWER", userID);
    axios
      .delete("http://localhost:3000/api/users", { data: { userID } })
      .then(response => {
        dispatch({ type: DELETE_USERS, payload: response.data });
      })
      .catch(err => console.log(err));
  };
};
