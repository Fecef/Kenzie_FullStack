import logo from "../../assets/Logo.svg";
import { Main, Redirect } from "./styles";
import { SignupForm } from "../../components/Form";

export function Signup() {
  return (
    <Main>
      <div>
        <img src={logo} alt="Logo" />
        <Redirect to={"/"}>Voltar</Redirect>
      </div>

      <SignupForm />
    </Main>
  );
}
