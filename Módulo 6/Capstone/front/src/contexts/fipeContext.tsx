import { createContext } from "react";

import { IFipeContext, IFipeContextProps } from "../interfaces/fipe.interface";
import { fipe } from "../services/api";

export const FipeContext = createContext<IFipeContext>({} as IFipeContext);

export const FipeProvider = ({ children }: IFipeContextProps) => {
  async function getAllBrands() {
    const res = await fipe.get("/cars");
    return { ...res.data };
  }

  async function getAllModelsByBrand(brand: string) {
    const res = await fipe.get(`/cars?brand=${brand}`);
    return res.data;
  }

  return (
    <FipeContext.Provider value={{ getAllBrands, getAllModelsByBrand }}>
      {children}
    </FipeContext.Provider>
  );
};
