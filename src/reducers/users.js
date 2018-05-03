import {
  SHOW_USERS,
  CREATE_USERS,
  DELETE_USERS
} from "../constants/actionTypes";

// const initialState = {
//   articles: []
// };

export const Users = (state = {}, action) => {
  switch (action.type) {
    case SHOW_USERS:
      return {
        ...state,
        users: [...state, action.payload]
      };
    case CREATE_USERS:
      return {
        ...state,
        userCreated: [...state, action.payload]
      };
    case DELETE_USERS:
      return {
        ...state,
        userDeleted: [...state, action.payload]
      };
    default:
      return state;
  }
};
