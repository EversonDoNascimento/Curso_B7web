import { useEffect, useReducer } from "react";
import "./App.css";
//import { LisType } from "./types/listType";
import { listReducer } from "./reducers/listReducer";
function App() {
  const [list, dispatch] = useReducer(listReducer, []);

  const handleClick = () => {
    dispatch({
      type: "add",
      payload: {
        text: "Novo item",
      },
    });
  };

  const handleRemov = () => {
    dispatch({
      type: "remove",
      payload: {
        id: list.length - 1,
      },
    });
  };
  useEffect(() => {}, [list]);
  return (
    <div className="">
      {list.map((item, index) => (
        <div key={index}>
          {item.id} - {item.text} - {item.done}
        </div>
      ))}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          handleRemov();
        }}
      >
        REMOVE
      </button>
    </div>
  );
}

export default App;
