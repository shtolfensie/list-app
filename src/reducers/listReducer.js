import { ADD_LIST, ADD_ITEM } from "../actions/types";

import uuid from "uuid";

export default function listReducer(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      let newList = { ...action.payload.newList, id: uuid(), items: [] };
      return [...state, newList];
    case ADD_ITEM:
      let newState = state.map(list => {
        if (list.id === action.payload.listId) {
          console.log(action.payload.newItem);
          return {
            ...list,
            items: [
              ...list.items,
              { name: action.payload.newItem, done: false }
            ]
          };
        } else return list;
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
