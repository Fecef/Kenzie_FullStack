import logo from "../../../assets/Logo.svg";
import { useContext } from "react";
import { Redirect } from "../../../components/Anchor/Anchor";
import { UserContext } from "../../../contexts/UserContext";
import { Container } from "./styles";

export function Nav() {
  const { logout } = useContext(UserContext);

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Redirect onClick={() => logout()} to={"/"} width="10rem">
        Sair
      </Redirect>
    </Container>
  );
}
