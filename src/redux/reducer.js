// 统一管理reducer

import { combineReducers } from "redux";
import Test from "./Reducers/Test";
const rootReducers = combineReducers({
  Test,
});

export default rootReducers;
