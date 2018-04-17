import {
  SHOW_USERS,
  CREATE_USERS,
  DELETE_USERS
} from "../constants/actionTypes";

// const initialState = {
//   articles: []
// };

export const Tasks = (state = {}, action) => {
  switch (action.type) {
    case SHOW_USERS:
      console.log("STATE ACTION", ...state, action.payload);
      return {
        ...state,
        tasks: [...state, action.payload]
      };
    case CREATE_USERS:
      return {
        ...state,
        taskCreated: [...state, action.payload]
      };
    case DELETE_USERS:
      return {
        ...state,
        taskCreated: [...state, action.payload]
      };
    default:
      return state;
  }
};
