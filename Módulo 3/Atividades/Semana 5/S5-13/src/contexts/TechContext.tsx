import { createContext, useContext, useEffect, useState } from "react";
import { iNewTechInput } from "../components/Modal/ModalNewTech/ModalNewTech";
import { iFormUpdateInput } from "../components/Modal/ModalUpdateTech/ModalUpdateTech";
import { kenzieHub } from "../services/api";
import { userAddTech } from "../services/userAddTech";
import { userDeleteTech } from "../services/userDeleteTech";
import { userUpdateTech } from "../services/userUpdateTech";
import { SpinnerContext } from "./SpinnerContext";
import { iTech } from "./UserContext";

interface iTechContextProps {
  children: React.ReactNode;
}
interface iTechContext {
  loading?: boolean;
  techs: iTech[];
  openAddModal: boolean;
  openUpdateModal: boolean;
  openModal: (modalType: "add" | "update") => void;
  closeModal: (modalType: "add" | "update") => void;
  newTech: (data: iNewTechInput) => void;
  updateTechStatus: (techId: string, data: iFormUpdateInput) => void;
  removeTech: (techId: string) => void;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export function TechProvider({ children }: iTechContextProps) {
  const { waiting, doneWaiting } = useContext(SpinnerContext);
  const [loading, setLoading] = useState(true);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [techs, setTechs] = useState<iTech[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    kenzieHub.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    async function loading() {
      const res = await kenzieHub.get("/profile");

      setTechs(res.data.techs);
      setLoading(false);
    }
    loading();
  }, []);

  function openModal(modalType: "add" | "update") {
    if (modalType === "add") {
      return setOpenAddModal(true);
    }
    return setOpenUpdateModal(true);
  }

  function closeModal(modalType: "add" | "update") {
    if (modalType === "add") {
      return setOpenAddModal(false);
    }
    return setOpenUpdateModal(false);
  }

  async function newTech(data: iNewTechInput) {
    waiting();
    const res = await userAddTech(data);
    doneWaiting();

    if (res) {
      setTechs([...techs, res]);
      setOpenAddModal(false);
    }
  }

  async function updateTechStatus(techId: string, data: iFormUpdateInput) {
    waiting();
    await userUpdateTech(techId, data);
    doneWaiting();

    const techIndex = techs.findIndex((el) => el.id === techId);
    techs[techIndex].status = data.status;
    setOpenUpdateModal(false);
  }

  async function removeTech(techId: string) {
    waiting();
    await userDeleteTech(techId);
    doneWaiting();

    const tech = techs.filter((el) => el.id !== techId);
    setTechs(tech);
    closeModal("update");
  }

  return (
    <TechContext.Provider
      value={{
        loading,
        techs,
        openAddModal,
        openUpdateModal,
        openModal,
        closeModal,
        newTech,
        updateTechStatus,
        removeTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
