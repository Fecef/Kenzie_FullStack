import { useContext } from "react";
import { AccountContext } from "../../../contexts/AccountContext";
import { Header } from "./styles";

export function HeaderBar() {
  const { user } = useContext(AccountContext);

  return (
    <Header className="container">
      <h1>Olá, {user.name}</h1>
      <p>{user.course_module}</p>
    </Header>
  );
}
