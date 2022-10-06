import { Link, useParams } from "react-router-dom";
import { members } from "../../services/api";

export function Customer() {
  const { id } = useParams();
  const member = members.find((element) => element.id === id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}
