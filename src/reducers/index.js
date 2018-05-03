import { combineReducers } from "redux";
import { Tasks } from "./tasks";
import { Users } from "./users";

const rootReducer = combineReducers({
  Tasks,
  Users
});

export default rootReducer;
