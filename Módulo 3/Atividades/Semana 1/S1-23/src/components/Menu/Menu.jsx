import "./style.css";

export function Menu({ children, onClick }) {
  return (
    <menu>
      {children}
      <button onClick={onClick}>Mostrar Frutas Vermelhas</button>
    </menu>
  );
}
