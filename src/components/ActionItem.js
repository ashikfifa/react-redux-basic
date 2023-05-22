import { ADD_ITEM, DELETE_ITEM } from "./ActionType";

const addItem = () => {
  return {
    type: ADD_ITEM
  };
};

const deletItem = () => {
  return {
    type: DELETE_ITEM
  };
};

export { addItem, deletItem };
