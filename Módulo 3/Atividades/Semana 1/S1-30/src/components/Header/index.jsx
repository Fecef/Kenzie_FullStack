import "./style.css";
import logo from "../../assets/Nu Kenzie.svg";

export function Header({ setIsLoggedIn }) {
  return (
    <header>
      <nav>
        <img src={logo} alt="Nu Kenzie" />
        <menu>
          <li onClick={() => setIsLoggedIn(false)}>Inicio</li>
        </menu>
      </nav>
    </header>
  );
}
