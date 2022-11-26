import { useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import { CloseIcon } from "../../Icons/Icon";
import { Input } from "../../Input/Input";
import { InputSelect } from "../../Input/InputSelect";
import Modal from "react-modal";
import { ModalBody } from "./styles";
import { ModalStyle } from "../styles";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

Modal.setAppElement("#root");
export interface iNewTechInput {
  title: string;
  status: string;
}

export function ModalNewTech() {
  const { openAddModal, closeModal, newTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm<iNewTechInput>();

  return (
    <div>
      <Modal
        isOpen={openAddModal}
        contentLabel="Formulário para adicoinar tecnologia."
        style={ModalStyle}
      >
        <ModalBody>
          <h2>
            Cadastrar Tecnologia
            <CloseIcon onClick={() => closeModal("add")} />
          </h2>

          <form onSubmit={handleSubmit(newTech)} className="modalInputs">
            <label>
              Nome
              <Input
                {...register("title")}
                type="text"
                autoComplete="off"
                maxLength={30}
                placeholder="Ex: React"
                required
              />
            </label>

            <label>
              Selecionar Status
              <InputSelect {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </InputSelect>
            </label>

            <Button type="submit">Cadastrar Tecnologia</Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
