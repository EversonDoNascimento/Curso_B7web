import { contextTs } from "../types/contextTs";

export type ActionAdd = {
  type: ActionsType; // Corrigido para usar o tipo ActionsType
  payload: unknown | contextTs[];
};

export type PhrasesType = {
  phrases: contextTs[];
  loading: boolean;
  error: null | string;
};

export enum ActionsType {
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  PHRASE = "PHRASE",
}

export type PostActions = ActionAdd;

export const useReducerPhrase = (
  state: PhrasesType, // Alterado o nome da variável para 'state' para refletir melhor a convensão
  action: PostActions
): PhrasesType | contextTs[] => {
  switch (action.type) {
    case ActionsType.REQUEST:
      return { ...state, loading: true, error: null };
    case ActionsType.SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload as string | null,
      };
    case ActionsType.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string | null,
      };

    default:
      return state; // Retorne o estado atual caso a ação não seja reconhecida
  }
};
