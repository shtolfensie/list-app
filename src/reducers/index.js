import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { itemReducer } from "./itemReducer";

const rootReducer = combineReducers({
  lists: listReducer,
  items: itemReducer
});

export default rootReducer;
