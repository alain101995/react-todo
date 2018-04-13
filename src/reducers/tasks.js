import { SHOW_TASKS } from "../constants/actionTypes";

// const initialState = {
//   articles: []
// };

export const getTasks = (state = {}, action) => {
  switch (action.type) {
    case SHOW_TASKS:
      return {
        ...state,
        tasks: [...state.articles, action.payload]
      };
    // case REM_ARTICLE:
    //   return {
    //     ...state,
    //     articles: [...state.articles, action.payload]
    //   };
    default:
      return state;
  }
};
