import {
  ADD_LIST,
  ADD_ITEM,
  DELETE_LIST,
  DONE_ITEM,
  GET_LISTS,
  GET_ITEMS
} from "./types";
import data from "../data";

import { normalize, schema } from "normalizr";
import uuid from "uuid";

export const getLists = () => dispatch => {
  const item = new schema.Entity("items");
  const list = new schema.Entity("lists", {
    items: [item]
  });
  const normalizedData = normalize(data, [list]);
  console.log(normalizedData);
  dispatch({
    type: GET_ITEMS,
    payload: { normalizedData }
  });
  dispatch({
    type: GET_LISTS,
    payload: { normalizedData }
  });
};

export function addList(newList) {
  const listId = uuid();
  return {
    type: ADD_LIST,
    payload: {
      listName: newList.name,
      listId
    }
  };
}

export function deleteList(listId) {
  return {
    type: DELETE_LIST,
    payload: { listId }
  };
}
