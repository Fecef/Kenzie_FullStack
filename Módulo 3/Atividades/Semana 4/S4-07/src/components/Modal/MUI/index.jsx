import * as React from "react";
import Modal from "@mui/material/Modal";
import { LoadingSpinner } from "../../Spinner";
import { Box, ModalBody } from "./styles";
import { Input, Select } from "../../../styles/input";
import { CloseIcon } from "../../../styles/icon";
import { ButtonLg, ButtonSm } from "../../../styles/button";
import { useForm } from "react-hook-form";
import {
  userCreateTech,
  userEraseTech,
  userUpdateTechStatus,
} from "../../../services/api";
import { successToast, warningToast } from "../Toastfy";

import { AccountContext } from "../../../contexts/AccountContext";

export function LoadingModal() {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <LoadingSpinner />
      </Box>
    </Modal>
  );
}

export function AddTechModal({ addModal, setAddModal }) {
  const { register, handleSubmit } = useForm();
  const { setUpdate } = React.useContext(AccountContext);

  async function onSubmit(data) {
    const token = localStorage.getItem("@TOKEN");
    const res = await userCreateTech(token, data);

    if (res.message) {
      warningToast("Tecnologia já listada.");
      return setAddModal(false);
    }
    setUpdate(true);
    successToast("Tecnologia adicionada com suceso!");
    return setAddModal(false);
  }

  return (
    <div>
      <Modal
        open={addModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBody>
          <h2>
            Cadastrar Tecnologia
            <CloseIcon onClick={() => setAddModal(false)} />
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="modalInputs">
            <label>
              Nome
              <Input
                {...register("title")}
                type="text"
                name="title"
                autoComplete="off"
                maxLength="30"
                placeholder="Ex: React"
                required
              />
            </label>

            <label>
              Selecionar Status
              <Select {...register("status")} name="status">
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
            </label>

            <ButtonLg theme={"color"} type="submit">
              Cadastrar Tecnologia
            </ButtonLg>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export function UpdateTechModal({ tech, updateModal, setUpdateModal }) {
  const { register, handleSubmit } = useForm();
  const { setUpdate } = React.useContext(AccountContext);

  async function onSubmit(data) {
    const token = localStorage.getItem("@TOKEN");

    await userUpdateTechStatus(token, tech.id, data);
    setUpdateModal(false);
    successToast("Tecnologia adicionada com suceso!");
    setUpdate(true);
  }

  async function eraseTech() {
    const token = localStorage.getItem("@TOKEN");

    await userEraseTech(token, tech.id);
    setUpdateModal(false);
    successToast("Tecnologia foi removida.");
    setUpdate(true);
  }

  return (
    <div>
      <Modal
        open={updateModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBody>
          <h2>
            Tecnologia Detalhes
            <CloseIcon onClick={() => setUpdateModal(false)} />
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="modalInputs">
            <label>
              Nome da Tecnologia
              <Input
                type="text"
                name="techName"
                autoComplete="off"
                maxLength="30"
                value={tech.title}
                disabled
              />
            </label>

            <label>
              Status
              <Select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
            </label>

            <div className="modalFooter">
              <ButtonLg theme={"color"} type="submit">
                Salvar alterações
              </ButtonLg>
              <ButtonSm
                onClick={() => eraseTech()}
                theme={"grey"}
                type="button"
              >
                Excluir
              </ButtonSm>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
