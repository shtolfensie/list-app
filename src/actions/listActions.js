import { ADD_LIST, ADD_ITEM } from "./types";

export function addList(newList) {
  return {
    type: ADD_LIST,
    payload: {
      newList
    }
  };
}

export function addItem(newItem, listId) {
  return {
    type: ADD_ITEM,
    payload: { newItem, listId }
  };
}
