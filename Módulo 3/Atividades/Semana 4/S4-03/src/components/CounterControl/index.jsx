import { useContext } from "react";
import { CounterContext } from "../../contexts/counter";

export function CounterControls() {
  const { aumentar, diminuir } = useContext(CounterContext);

  return (
    <div>
      <button onClick={diminuir}>-</button>
      <button onClick={aumentar}>+</button>
    </div>
  );
}
