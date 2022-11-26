import { CounterContext } from "../../contexts/counter";

import { useContext } from "react";

export function Counter() {
  const { counter } = useContext(CounterContext);

  return <h1>{counter}</h1>;
}
