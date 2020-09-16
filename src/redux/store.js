import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers, applyMiddleware());
export default store;
