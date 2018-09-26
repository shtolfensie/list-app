import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { addList } from "./actions/listActions";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// store.dispatch({
//   type: "ADD_LIST",
//   payload: {
//     newList: {
//       name: "hello"
//     }
//   }
// });
// store.dispatch({
//   type: "ADD_LIST",
//   payload: {
//     newList: {
//       name: "how are you doing"
//     }
//   }
// });

export default store;
