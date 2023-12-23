import { useContext } from "react";
import { Context } from "../contexts/countContext";

export const OnlineUsers = () => {
  const context = useContext(Context);

  return (
    <>
      <div>{context?.context}</div>
      <button
        onClick={() => {
          context?.contextFunc(0);
        }}
      >
        Zerar
      </button>
    </>
  );
};
