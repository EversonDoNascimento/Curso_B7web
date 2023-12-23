import { useContext, useState } from "react";
import { ContextPhrase } from "../UseContextPhrases/ContextPhrases";
import { ActionsType } from "../useReducerPhrases/reducerPhrases";
import { AxiosResponse } from "axios";
import api from "../axios/api";

export const InputPhrases = () => {
  const ctx = useContext(ContextPhrase);
  const [phrase, setPhrase] = useState({
    author: "",
    phrase: "",
  });
  const addPhrase = async () => {
    try {
      const response: AxiosResponse = await api.post("/phrase", phrase);
      ctx?.dispatch({
        type: ActionsType.SUCCESS,
        payload: [ctx.state, response],
      });
      setPhrase({ author: "", phrase: "" });
    } catch (error) {
      ctx?.dispatch({
        type: ActionsType.FAILURE,
        payload: "Error no envio da frase",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        placeholder="Digite seu nome: "
        value={phrase.author}
        onChange={(e) => {
          setPhrase({ ...phrase, author: e.target.value });
        }}
      ></input>
      <textarea
        placeholder="Digite a frase que você deseja adicionar"
        value={phrase.phrase}
        onChange={(e) => {
          setPhrase({ ...phrase, phrase: e.target.value });
        }}
      ></textarea>
      <button onClick={addPhrase}>Enviar</button>
    </div>
  );
};
