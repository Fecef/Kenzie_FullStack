import { useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { TechContext } from "../../../contexts/TechContext";
import { iTech } from "../../../contexts/UserContext";
import { userDeleteTech } from "../../../services/userDeleteTech";
import { Button } from "../../Button/Button";
import { CloseIcon } from "../../Icons/Icon";
import { Input } from "../../Input/Input";
import { InputSelect } from "../../Input/InputSelect";
import { ModalStyle } from "../styles";
import { ModalBody } from "./styles";

interface iModalUpdateTechProps {
  tech: iTech;
}

export interface iFormUpdateInput {
  status: string;
}

export function ModalUpdateTech({ tech }: iModalUpdateTechProps) {
  const { openUpdateModal, closeModal, updateTechStatus, removeTech } =
    useContext(TechContext);
  const { register, handleSubmit } = useForm<iFormUpdateInput>();

  async function deleteTech() {
    await userDeleteTech(tech?.id);
  }

  const onUpdate = (data: iFormUpdateInput) => updateTechStatus(tech.id, data);
  const onRemove = () => removeTech(tech.id);

  return (
    <Modal
      isOpen={openUpdateModal}
      contentLabel="Formulário para adicoinar tecnologia."
      style={ModalStyle}
    >
      <ModalBody>
        <h2>
          Tecnologia Detalhes
          <CloseIcon onClick={() => closeModal("update")} />
        </h2>

        <form onSubmit={handleSubmit(onUpdate)} className="modalInputs">
          <label>
            Nome da Tecnologia
            <Input
              type="text"
              name="techName"
              autoComplete="off"
              maxLength={30}
              value={tech?.title}
              disabled
            />
          </label>

          <label>
            Status
            <InputSelect {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </InputSelect>
          </label>

          <div className="modalFooter">
            <Button type="submit">Salvar alterações</Button>

            <Button
              onClick={() => onRemove()}
              colored={true}
              type="button"
              width="10rem"
            >
              Excluir
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}
