import { combineReducers } from "redux";
import { ADD_LIST, DELETE_LIST, GET_LISTS, ADD_ITEM } from "../actions/types";
import getBgColor from "../helpers/bgColor";

import uuid from "uuid";

function addList(state = [], { type, payload }) {
  return {
    ...state,
    [payload.listId]: {
      id: payload.listId,
      name: payload.listName,
      items: [],
      color: getBgColor()
    }
  };
}

function addItemId(state, { type, payload }) {
  const list = state[payload.listId];
  return {
    ...state,
    [payload.listId]: {
      ...list,
      items: list.items.concat(payload.itemId)
    }
  };
}

function removeList(state, { type, payload }) {
  delete state[payload.listId];
  return state;
}

function listsById(state = [], action) {
  switch (action.type) {
    case GET_LISTS:
      return action.payload.normalizedData.entities.lists;
    case ADD_LIST:
      return addList(state, action);
    case DELETE_LIST:
      return removeList(state, action);
    case ADD_ITEM:
      return addItemId(state, action);
    default:
      return state;
  }
}

function addListId(state = [], { type, payload }) {
  return state.concat(payload.listId);
}

function removeListId(state, { type, payload }) {
  return state.filter(id => id !== payload.listId);
}

function allLists(state = [], action) {
  switch (action.type) {
    case GET_LISTS:
      return action.payload.normalizedData.result;
    case ADD_LIST:
      return addListId(state, action);
    case DELETE_LIST:
      return removeListId(state, action);
    default:
      return state;
  }
}

export const listReducer = combineReducers({
  byId: listsById,
  allIds: allLists
});

// export default function listReducer(state = [], action) {
//   switch (action.type) {
//     case GET_LISTS:
//       return action.payload.normalizedData.entities.lists;
//     case ADD_LIST:
//       let newList = { ...action.payload.newList, id: uuid(), items: [] };
//       return [...state, newList];
//     case DELETE_LIST:
//       return state.filter(list => list.id !== action.payload.listId);
//     case ADD_ITEM:
//       let newState = state.map(list => {
//         if (list.id === action.payload.listId) {
//           console.log(action.payload.newItem);
//           return {
//             ...list,
//             items: [
//               ...list.items,
//               { id: uuid(), name: action.payload.newItem, done: false }
//             ]
//           };
//         } else return list;
//       });
//       return newState;
//     case DONE_ITEM:
//       return state.map(list => {
//         if (list.id === action.payload.listId) {
//           return {
//             ...list,
//             items: list.items.map(item => {
//               if (item.id === action.payload.itemId)
//                 return { ...item, done: !item.done };
//               else return item;
//             })
//           };
//         } else {
//           return list;
//         }
//       });
//     default:
//       return state;
//   }
// }
