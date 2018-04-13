import { combineReducers } from "redux";
import { getTasks } from "./tasks";
// import { users } from "./users";

const rootReducer = combineReducers({
  getTasks
});

export default rootReducer;
