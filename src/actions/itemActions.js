import {
  ADD_LIST,
  ADD_ITEM,
  DELETE_LIST,
  DONE_ITEM,
  GET_LISTS,
  GET_ITEMS
} from "./types";
import data from "../data";

import uuid from "uuid";

export function addItem(itemName, listId) {
  return {
    type: ADD_ITEM,
    payload: { itemName, listId, itemId: uuid() }
  };
}

export function doneItem(itemId, listId) {
  return {
    type: DONE_ITEM,
    payload: { itemId, listId }
  };
}
