import {
  SHOW_TASKS,
  CREATE_TASKS,
  DELETE_TASKS
} from "../constants/actionTypes";

// const initialState = {
//   articles: []
// };

export const Tasks = (state = {}, action) => {
  switch (action.type) {
    case SHOW_TASKS:
      return {
        ...state,
        tasks: [...state, action.payload]
      };
    case CREATE_TASKS:
      return {
        ...state,
        taskCreated: [...state, action.payload]
      };
    case DELETE_TASKS:
      return {
        ...state,
        taskDeleted: [...state, action.payload]
      };
    default:
      return state;
  }
};
