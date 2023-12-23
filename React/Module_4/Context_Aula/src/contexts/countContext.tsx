import { ReactNode, createContext, useState } from "react";

//Definindo um type para meyu context
type contextType = {
  context: number;
  contextFunc: (n: number) => void;
};

//Criando o context passando o type que pode ser null também
export const Context = createContext<contextType | null>(null);

//Type para o children
type Props = {
  children: ReactNode;
};

//O children serve para receber qualquer tipo de componente dentro do Context.Provider
export const ContextProvider = ({ children }: Props) => {
  const [quantityUsers, setQuantityUsers] = useState(43);
  return (
    <>
      <Context.Provider
        value={{ context: quantityUsers, contextFunc: setQuantityUsers }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
