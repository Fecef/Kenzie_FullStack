import "./style.css";
import logo from "../../assets/Nu Kenzie Claro.svg";
import illustration from "../../assets/illustration.svg";

export function Intro({ setIsLoggedIn }) {
  return (
    <main className="main">
      <div className="intro-text">
        <img src={logo} alt="Nu Kenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <small>de forma rápida e segura</small>
        <button onClick={() => setIsLoggedIn(true)} type="button">
          Iniciar
        </button>
      </div>

      <div className="intro-img">
        <img src={illustration} alt="illustration" />
      </div>
    </main>
  );
}
