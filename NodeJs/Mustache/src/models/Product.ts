import { productsType } from "../types/productType";

const data: productsType[] = [
  {
    name: "Notebook",
    price: 2500.0,
    category: "Tecnologia",
  },
  {
    name: "Smartphone",
    price: 1200.0,
    category: "Tecnologia",
  },
  {
    name: "Livro",
    price: 35.5,
    category: "Leitura",
  },
  {
    name: "Fones de ouvido",
    price: 150.0,
    category: "Tecnologia",
  },
  {
    name: "Câmera digital",
    price: 800.0,
    category: "Fotografia",
  },
];

export const Product = {
  getAll: (): productsType[] => {
    return data;
  },
  getFromPriceAfter: (price: number): productsType[] => {
    return data.filter((item) => item.price >= price);
  },
  getOnlyName: (): productsType[] => {
    return data.filter((item) => item.name);
  },
};
