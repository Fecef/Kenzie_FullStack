import { createContext, useState } from "react";

export const CounterContext = createContext({});

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const aumentar = () => setCounter(counter + 1);
  const diminuir = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider value={{ counter, aumentar, diminuir }}>
      {children}
    </CounterContext.Provider>
  );
}