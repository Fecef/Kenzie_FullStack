import { Link } from "react-router-dom";
import { Main } from "./styles";
import { members } from "../../services/api";

export function Home() {
  console.log(members);
  return (
    <Main>
      <h1>Home</h1>
      <div>
        <menu>
          <h2>Company</h2>
          {members.map(
            (element) =>
              element.type === "pj" && (
                <Link to={`/company/${element.id}`} key={element.id}>
                  {element.name}
                </Link>
              )
          )}
        </menu>
        <menu>
          <h2>Custumer</h2>
          {members.map(
            (element) =>
              element.type === "pf" && (
                <Link to={`/customer/${element.id}`} key={element.id}>
                  {element.name}
                </Link>
              )
          )}
        </menu>
      </div>
    </Main>
  );
}
