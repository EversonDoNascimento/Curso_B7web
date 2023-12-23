import { useContext } from "react";
import { ContextPhrase } from "../UseContextPhrases/ContextPhrases";

const ListPhrases = () => {
  const ctxData = useContext(ContextPhrase);

  return (
    <>
      <ul>
        {ctxData?.data.map((item) => {
          return (
            <div
              className=" flex flex-col justify-between bg-slate-900 mb-2 w-auto "
              key={item.id}
            >
              <li className="flex mt-3 mb-4 ml-4 mr-4 w-72 text-justify overflow-hidden">
                {item.phrase}
              </li>
              <li className="mb-1 flex justify-end pr-1 text-white">
                {item.author}
              </li>
            </div>
          );
        })}
      </ul>
      <ul>
        {ctxData?.state.phrases.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.author}</li>
              <li>{item.phrase}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ListPhrases;
