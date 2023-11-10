import { itemType } from "../types/itemType";
import { useState } from "react";
interface Props {
  list: itemType;
  edit: (id: number, text: string) => void;
  remove: (id: number) => void;
}
const InputTask = ({ list, edit, remove }: Props) => {
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>(list.name);
  return (
    <div>
      <ul>
        <li className="w-96 flex justify-between items-center mt-4">
          {confirmEdit ? (
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></input>
          ) : (
            list.name
          )}
          <div>
            <button
              onClick={() => {
                setConfirmEdit(!confirmEdit);
                if (!confirmEdit) {
                  edit(list.id, text);
                }
              }}
            >
              {confirmEdit ? "Save" : "Edit"}
            </button>
            <button onClick={() => remove(list.id)}>Remove</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InputTask;
