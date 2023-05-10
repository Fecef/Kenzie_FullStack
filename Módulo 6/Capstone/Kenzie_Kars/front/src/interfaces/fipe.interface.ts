export interface IFipeModel {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
  valueString?: string;
}

export interface IFipeBrand {
  brand: IFipeModel[];
}

export interface IFipeContext {
  getAllBrands: () => Promise<IFipeBrand>;
  getAllModelsByBrand: (brand: string) => Promise<IFipeModel[]>;
}

export interface IFipeContextProps {
  children: React.ReactNode;
}
