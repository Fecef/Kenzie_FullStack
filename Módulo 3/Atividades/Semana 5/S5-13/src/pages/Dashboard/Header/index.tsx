import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Container } from "./styles";

export function Header() {
  const { user } = useContext(UserContext);

  return (
    <Container className="container">
      <h1>Olá, {user?.name}!</h1>
      <p>{user?.course_module}</p>
    </Container>
  );
}
