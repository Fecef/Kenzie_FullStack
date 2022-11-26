import logo from "../../assets/Logo.svg";
import { Redirect } from "../../components/Anchor/Anchor";
import { FormRegister } from "../../components/Form/FormRegister/FormRegister";
import { Container } from "./styles";

export function Register() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo" />
        <Redirect to={"/"} width="30">
          Voltar
        </Redirect>
      </div>

      <FormRegister />
    </Container>
  );
}
