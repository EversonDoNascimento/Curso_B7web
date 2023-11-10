import { itemType } from "../types/itemType";

type addAction = {
  type: "add";
  payload: {
    id: number;
    name: string;
    status: boolean;
  };
};

type removeAction = {
  type: "remove";
  payload: {
    id: number;
  };
};

type editAction = {
  type: "edit";
  payload: {
    id: number;
    name: string;
  };
};

type doneAction = {
  type: "done";
  payload: {
    id: number;
  };
};

type ListActions = addAction | removeAction | editAction | doneAction;
export const listReducer = (list: itemType[], action: ListActions) => {
  switch (action.type) {
    case "add":
      return [
        ...list,
        { name: action.payload.name, id: action.payload.id, status: false },
      ];
    case "edit":
      return list.map((item) => {
        if (item.id == action.payload.id) {
          item.name = action.payload.name;
        }
        return item;
      });
    case "remove":
      return list.filter((item) => item.id !== action.payload.id);
    case "done":
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.status = !item.status;
        }
        return item;
      });
    default:
      return list;
  }
};
