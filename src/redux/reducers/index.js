import { combineReducers } from "redux";
import subReducer from "./subReducer";
import adminReducer from "./adminReducer";

const allReducers = combineReducers({
  subscriber: subReducer,
  admin: adminReducer,
});

export default allReducers;
