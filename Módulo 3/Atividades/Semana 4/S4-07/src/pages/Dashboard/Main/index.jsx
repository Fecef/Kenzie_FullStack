import { useContext, useState } from "react";
import { AddTechModal, UpdateTechModal } from "../../../components/Modal/MUI";
import { AccountContext } from "../../../contexts/AccountContext";
import { SadIcon } from "../../../styles/icon";
import { EmptyListMessage, Main } from "./styles";

export function MainContent() {
  const { user } = useContext(AccountContext);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [tech, setTech] = useState({});

  function openUpdateModal(tech) {
    setUpdateModal(true);
    setTech(tech);
  }

  return (
    <>
      <Main className="container">
        <div>
          <h2>Tecnologias</h2>
          <button onClick={() => setAddModal(true)} type="button">
            +
          </button>
        </div>

        {!user.techs.length ? (
          <EmptyListMessage>
            Sua lista está vazia...
            <SadIcon />
          </EmptyListMessage>
        ) : (
          <menu>
            {user.techs.map((tech) => (
              <li onClick={() => openUpdateModal(tech)} key={tech.id}>
                {tech.title} <div>{tech.status}</div>
              </li>
            ))}
          </menu>
        )}
      </Main>

      <AddTechModal addModal={addModal} setAddModal={setAddModal} />

      <UpdateTechModal
        updateModal={updateModal}
        setUpdateModal={setUpdateModal}
        tech={tech}
      />
    </>
  );
}
