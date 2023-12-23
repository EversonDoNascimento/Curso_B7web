import { LisType } from "../types/listType";

type AddAction = {
  type: "add";
  payload: { text: string };
};

type RemoveAction = {
  type: "remove";
  payload: { id: number };
};

type EditAction = {
  type: "edit";
  payload: {
    id: number;
    text: string;
  };
};

type ToggleAction = {
  type: "toggle";
  payload: { id: number };
};

type ListActions = AddAction | RemoveAction | EditAction | ToggleAction;

export const listReducer = (list: LisType[], action: ListActions) => {
  switch (action.type) {
    case "add":
      return [
        ...list,
        { id: list.length, text: action.payload.text, done: false },
      ];
    case "edit":
      return list.map((item) => {
        if (item.id == action.payload.id) {
          item.text = action.payload.text;
        }
        return item;
      });
    case "remove":
      return list.filter((item) => item.id != action.payload.id);
    case "toggle":
      return list.map((item) => {
        if (item.id == action.payload.id) {
          item.done = !item.done;
        }
        return item;
      });
    default:
      return list;
  }
};
