import { useContext, useState } from "react";
import { EmptyListMessage } from "../../../components/EmptyListMessage/styles";
import { SadIcon } from "../../../components/Icons/Icon";
import { ModalNewTech } from "../../../components/Modal/ModalNewTech/ModalNewTech";
import { ModalUpdateTech } from "../../../components/Modal/ModalUpdateTech/ModalUpdateTech";
import { TechContext } from "../../../contexts/TechContext";
import { iTech } from "../../../contexts/UserContext";
import { Container } from "./styles";

export function Main() {
  const { techs, openModal } = useContext(TechContext);
  const [tech, setTech] = useState<iTech>({} as iTech);

  return (
    <Container>
      <div>
        <h2>Tecnologias</h2>
        <button onClick={() => openModal("add")} type="button">
          +
        </button>
      </div>

      {techs?.length ? (
        <menu>
          {techs?.map((tech: iTech) => (
            <li
              onClick={() => {
                setTech(tech);
                openModal("update");
              }}
              key={tech.id}
            >
              {tech.title}
              <div>{tech.status}</div>
            </li>
          ))}
        </menu>
      ) : (
        <EmptyListMessage>
          Sua lista está vazia...
          <SadIcon />
        </EmptyListMessage>
      )}

      <ModalUpdateTech tech={tech} />
      <ModalNewTech />
    </Container>
  );
}
