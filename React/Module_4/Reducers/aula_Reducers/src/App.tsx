import { useReducer, useState } from "react";
import "./App.css";
//import { itemType } from "./types/itemType";
import { listReducer } from "./Reducers/listReducers";
import { itemType } from "./types/itemType";
import InputTask from "./components/InputTask";

function App() {
  const [list, dispatch] = useReducer(listReducer, []);
  const [task, setTask] = useState<string>("");
  const handleAddTask = () => {
    dispatch({
      type: "add",
      payload: {
        id: Math.floor(Math.random() * 1000),
        name: task,
        status: false,
      },
    });
    setTask("");
  };

  const handleRemoveTask = (id: number) => {
    dispatch({
      type: "remove",
      payload: {
        id: id,
      },
    });
  };
  const handleEditTask = (id: number, task: string) => {
    dispatch({
      type: "edit",
      payload: { id: id, name: task },
    });
  };
  return (
    <>
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{ display: "flex" }}
        >
          <input
            className="w-80"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="Digite sua tarefa"
          ></input>
          <button onClick={handleAddTask}>add</button>
        </form>
      </div>
      <div>
        {list.map((item) => {
          return (
            <InputTask
              list={item}
              key={item.id}
              edit={(id, text) => {
                handleEditTask(id, text);
              }}
              remove={(e: number) => {
                handleRemoveTask(e);
              }}
            ></InputTask>
          );
        })}
      </div>
    </>
  );
}

export default App;
