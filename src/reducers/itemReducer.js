import { GET_ITEMS, ADD_ITEM, DONE_ITEM } from "../actions/types";
import { combineReducers } from "redux";

function addItemById(state = [], { type, payload }) {
  return {
    ...state,
    [payload.itemId]: {
      id: payload.itemId,
      name: payload.itemName,
      listId: payload.listId
    }
  };
}

function doneItemById(state, { type, payload }) {
  const item = state[payload.itemId];
  item.done = !item.done;
  return {
    ...state,
    [payload.itemId]: item
  };
}

function itemsById(state = [], action) {
  switch (action.type) {
    case GET_ITEMS:
      return action.payload.normalizedData.entities.items;
    case ADD_ITEM:
      return addItemById(state, action);
    case DONE_ITEM:
      return doneItemById(state, action);
    default:
      return state;
  }
}

export const itemReducer = combineReducers({
  byId: itemsById
});
