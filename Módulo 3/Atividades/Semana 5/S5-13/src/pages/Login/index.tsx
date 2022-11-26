import logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { FormLogin } from "../../components/Form/FormLogin/FormLogin";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "./styles";
import { Navigate } from "react-router-dom";

export function Login() {
  const { user } = useContext(UserContext);

  return user ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <Container>
      <img src={logo} alt="Logo" />

      <FormLogin />
    </Container>
  );
}
