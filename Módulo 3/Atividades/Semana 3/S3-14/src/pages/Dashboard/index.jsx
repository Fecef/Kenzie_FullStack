import { Navigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { ButtonSm } from "../../styles/button";
import { Header, Main, Nav } from "./styles";

export function Dashboard({ user, loggedIn, setLoggedIn }) {
  if (!loggedIn) return <Navigate to="/" />;

  const userLogout = () => {
    window.localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <div>
      <Nav className="container">
        <img src={logo} alt="Logo" />
        <ButtonSm onClick={() => userLogout()} type="button">
          Sair
        </ButtonSm>
      </Nav>
      <hr />
      <Header className="container">
        <h1>Olá, {user.name}</h1>
        <p>{user.course_module}</p>
      </Header>
      <hr />
      <Main className="container">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Main>
    </div>
  );
}
