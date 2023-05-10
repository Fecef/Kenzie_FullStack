import { Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FilterComponent } from "../../components/FilterComponent";
import { FilterWithInputComponent } from "../FilterWithInputComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { ButtonBrand1 } from "../ButtomComponents";

export const ListFiltersComponent = () => {
  const {
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
  } = useContext(AnnouncementContext);

  const resetFilters = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedColor("");
    setSelectedYear(0);
    setSelectedFuel("");
    setMinKm("");
    setMaxKm("");
    setMinPrice("");
    setMaxPrice("");
    setHiddenButtonResetFilters(true);
  };

  const filterBrands = new Set(brands);
  const filterModels = new Set(models);
  const filterColors = new Set(colors);
  const filterYears = new Set(years);
  const filterFuel = new Set(fuel);

  return (
    <Flex flexDirection="column" gap="42px">
      <FilterComponent
        titleFilter={"Marca"}
        filters={[...filterBrands]}
        setSelected={setSelectedBrand}
      />
      <FilterComponent
        titleFilter={"Modelo"}
        filters={[...filterModels]}
        setSelected={setSelectedModel}
      />
      <FilterComponent
        titleFilter={"Cor"}
        filters={[...filterColors]}
        setSelected={setSelectedColor}
      />
      <FilterComponent
        titleFilter={"Ano"}
        filters={[...filterYears]}
        setSelected={setSelectedYear}
      />
      <FilterComponent
        titleFilter={"Combustível"}
        filters={[...filterFuel]}
        setSelected={setSelectedFuel}
      />
      <FilterWithInputComponent
        titleFilter={"Km"}
        min={minKm}
        max={maxKm}
        setMin={setMinKm}
        setMax={setMaxKm}
      />
      <FilterWithInputComponent
        titleFilter={"Preço"}
        min={minPrice}
        max={maxPrice}
        setMin={setMinPrice}
        setMax={setMaxPrice}
      />

      <ButtonBrand1
        maxW="305px"
        onClick={resetFilters}
        hidden={hiddenButtonResetFilters}
      >
        Limpar filtros
      </ButtonBrand1>
    </Flex>
  );
};
