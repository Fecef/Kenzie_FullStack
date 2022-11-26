import logo from "../../../assets/Logo.svg";
import { ButtonSm } from "../../../styles/button";
import { Nav } from "./styles";

import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  function userLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <Nav className="container">
      <img src={logo} alt="Logo" />
      <ButtonSm onClick={() => userLogout()} type="button">
        Sair
      </ButtonSm>
    </Nav>
  );
}
