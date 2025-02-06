import { createContext, useState, ReactNode } from "react";

interface InputContextType {
  inputValues: { [key: string]: string };
  setInputValue: (key: string, value: string) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  // Función para actualizar un input específico
  const setInputValue = (key: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <InputContext.Provider value={{ inputValues, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputContext;
