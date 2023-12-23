import React, {
  createContext,
  ReactNode,
  useReducer,
  Reducer,
  useState,
  useEffect,
} from "react";

import {
  useReducerPhrase,
  PhrasesType,
  PostActions,
  ActionsType,
} from "../useReducerPhrases/reducerPhrases";
import { LoadData } from "../components/loadData";
import { contextTs } from "../types/contextTs";

type ContextType = {
  state: PhrasesType;
  dispatch: React.Dispatch<PostActions>;
  data: contextTs[];
};

export const ContextPhrase = createContext<ContextType | null>(null);

export const ProviderPhrase = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<PhrasesType, PostActions>>(
    useReducerPhrase,
    {
      phrases: [],
      loading: false,
      error: null,
    }
  );
  const [data, setData] = useState([]);
  const loadPhrases = async () => {
    try {
      dispatch({
        type: ActionsType.REQUEST,
        payload: true,
      });
      const resultados = await LoadData();
      setData(resultados);
    } catch (error) {
      dispatch({
        type: ActionsType.FAILURE,
        payload: "Erro ao carregar os dados",
      });
    }
  };

  useEffect(() => {
    loadPhrases();
  }, []);
  const contextValue: ContextType = {
    state,
    dispatch,
    data: data,
  };

  return (
    <ContextPhrase.Provider value={contextValue}>
      {children}
    </ContextPhrase.Provider>
  );
};
