import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { Header } from "./Header";
import { Main } from "./Main";
import { Nav } from "./Navbar";
import { Container } from "./styles";

export function Dashboard() {
  const { loading } = useContext(TechContext);

  if (loading) return null;

  return (
    <Container>
      <Nav />
      <hr />
      <Header />
      <hr />
      <Main />
    </Container>
  );
}
