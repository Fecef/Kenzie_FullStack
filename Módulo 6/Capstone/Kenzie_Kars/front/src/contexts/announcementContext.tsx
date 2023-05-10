import { createContext, useEffect, useState } from "react";

import {
  IAnnoucementUpdate,
  IAnnouncement,
  IAnnouncementContext,
  IAnnouncementContextProps,
  IAnnouncementRegister,
} from "../interfaces/announcement.interface";
import { api } from "../services/api";

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

export const AnnouncementProvider = ({
  children,
}: IAnnouncementContextProps) => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [announcement, setAnnouncement] = useState<IAnnouncement>();
  const [editAdModalOpen, setEditAdModalOpen] = useState(false);
  const [deleteAdModalOpen, setDeleteAdModalOpen] = useState(false);
  const [cardId, setCardId] = useState<string | undefined>(undefined);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedFuel, setSelectedFuel] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [fuel, setFuel] = useState<string[]>([]);
  const [minKm, setMinKm] = useState("");
  const [maxKm, setMaxKm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<IAnnouncement[]>([]);
  const [hiddenButtonResetFilters, setHiddenButtonResetFilters] =
    useState(true);

  async function announcementRegister(data: IAnnouncementRegister) {
    try {
      await api.post("/announcements", data);
    } catch (error) {
      console.log(error);
    } finally {
      document.location.reload();
    }
  }
  async function announcementUpdate(data: IAnnoucementUpdate) {
    const token = localStorage.getItem("@kenzieToken");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/announcements/${cardId}`, data);
    } catch (error) {
      console.log(error);
    } finally {
      document.location.reload();
    }
  }

  async function announcementListAll() {
    try {
      const res = await api.get("/announcements");
      const data = res.data;
      setAnnouncements(data);
      setFilteredAnnouncements(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function announcementListOne(data: string) {
    try {
      const res = await api.get(`/announcements/${data}`);

      setAnnouncement(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function announcementDelete() {
    const token = localStorage.getItem("@kenzieToken");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/announcements/${cardId}`);
    } catch (err) {
      console.log(err);
    } finally {
      document.location.reload();
    }
  }

  function handleClick(typeModal: string) {
    if (typeModal === "editAd") {
      setEditAdModalOpen(true);
    }
    if (typeModal === "delete") {
      setDeleteAdModalOpen(true);
      setEditAdModalOpen(false);
    }
  }

  useEffect(() => {
    announcementListAll();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let url = "/announcements";

      if (selectedBrand !== "") {
        url += `${url.includes("?") ? "&" : "?"}brand=${selectedBrand}`;
      }

      if (selectedModel !== "") {
        url += `${url.includes("?") ? "&" : "?"}model=${selectedModel}`;
      }

      if (selectedYear !== 0) {
        url += `${url.includes("?") ? "&" : "?"}year=${selectedYear}`;
      }

      if (selectedColor !== "") {
        url += `${url.includes("?") ? "&" : "?"}color=${selectedColor}`;
      }

      if (selectedFuel !== "") {
        url += `${url.includes("?") ? "&" : "?"}fuelType=${selectedFuel}`;
      }

      if (minKm !== "") {
        url += `${url.includes("?") ? "&" : "?"}minKm=${minKm}`;
      }

      if (maxKm !== "") {
        url += `${url.includes("?") ? "&" : "?"}maxKm=${maxKm}`;
      }

      if (minPrice !== "") {
        url += `${url.includes("?") ? "&" : "?"}minPrice=${minPrice}`;
      }

      if (maxPrice !== "") {
        url += `${url.includes("?") ? "&" : "?"}maxPrice=${maxPrice}`;
      }

      try {
        const response = await api.get(url);
        let data = response.data;
        let filteredData = response.data;

        const formatMinKm = parseInt(minKm.replace(/[^\d,-]/g, "")) + "";
        const formatMaxKm = parseInt(maxKm.replace(/[^\d,-]/g, "")) + "";
        const formatMinPrice = parseInt(minPrice.replace(/[^\d,-]/g, "")) + "";
        const formatMaxPrice = parseInt(maxPrice.replace(/[^\d,-]/g, "")) + "";

        if (
          selectedBrand ||
          selectedModel ||
          selectedYear ||
          selectedColor ||
          selectedFuel ||
          minKm ||
          maxKm ||
          minPrice ||
          maxPrice
        ) {
          setHiddenButtonResetFilters(false);
        }

        data = filteredData;

        setAnnouncements(data);
        setBrands([]);
        setModels([]);
        setColors([]);
        setYears([]);
        setFuel([]);
        data.map((el: IAnnouncement) => {
          setBrands((prev) => [...prev, el.brand]);
          setModels((prev) => [...prev, el.model]);
          setColors((prev) => [...prev, el.color]);
          setYears((prev) => [...prev, el.year]);
          setFuel((prev) => [...prev, el.fuelType]);
        });
        setFilteredAnnouncements(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [
    selectedBrand,
    selectedModel,
    selectedColor,
    selectedYear,
    selectedFuel,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
  ]);

  const handleCleanFilter = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedColor("");
    setSelectedYear(0);
    setSelectedFuel("");
    setMinKm("");
    setMaxKm("");
    setMinPrice("");
    setMaxPrice("");
  }

  return (
    <AnnouncementContext.Provider
      value={{
        editAdModalOpen,
        setEditAdModalOpen,
        deleteAdModalOpen,
        setDeleteAdModalOpen,
        handleClick,
        handleCleanFilter,
        setCardId,
        announcements,
        announcement,
        announcementRegister,
        announcementListOne,
        announcementListAll,
        announcementUpdate,
        announcementDelete,
        setSelectedBrand,
        setSelectedModel,
        setSelectedColor,
        setSelectedYear,
        setSelectedFuel,
        setMinKm,
        setMaxKm,
        setMinPrice,
        setMaxPrice,
        minKm,
        maxKm,
        minPrice,
        maxPrice,
        brands,
        models,
        colors,
        years,
        fuel,
        setHiddenButtonResetFilters,
        hiddenButtonResetFilters,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
