import { createStore } from "redux";
import rootReducer from "./reducers";
import { addList } from "./actions/listActions";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
  type: "ADD_LIST",
  payload: {
    newList: {
      name: "hello"
    }
  }
});
store.dispatch({
  type: "ADD_LIST",
  payload: {
    newList: {
      name: "how are you doing"
    }
  }
});

export default store;
