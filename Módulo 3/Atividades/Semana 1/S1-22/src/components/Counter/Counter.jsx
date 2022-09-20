import "./style.css";

export function Counter({ children, fn }) {
  return (
    <div>
      {children}
      <button onClick={fn}>Criar novo número</button>
    </div>
  );
}
