import { animalType } from "../types/animalType";

const data: animalType[] = [
  {
    urlImage: "images/pastor-alemao.jpg",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
    genre: "Masculino",
    species: "dog",
  },
  {
    urlImage: "images/labrador.jpg",
    name: "Labrador-retriever",
    color: "Branco",
    genre: "Masculino",
    species: "dog",
  },
  {
    urlImage: "images/zwergspitz.jpg",
    name: "Zwergspitz",
    color: "Amarelo",
    genre: "Feminino",
    species: "dog",
  },
  {
    urlImage: "images/husky.jpg",
    name: "Husky Siberiano",
    color: "Branco e Preto",
    genre: "Masculino",
    species: "dog",
  },
  {
    urlImage: "images/golden.jpg",
    name: "Golden Retriever",
    color: "Amarelo",
    genre: "Masculino",
    species: "dog",
  },
  {
    urlImage: "images/poodle.jpg",
    name: "Poodle",
    color: "Branco",
    genre: "Feminino",
    species: "dog",
  },
  {
    urlImage: "images/bulldog.jpg",
    name: "Bulldog",
    color: "Branco e Amarelo",
    genre: "Masculino",
    species: "dog",
  },
  {
    urlImage: "images/persa.jpg",
    name: "Persa",
    color: "Amarelo",
    genre: "Masculino",
    species: "cat",
  },
  {
    urlImage: "images/mainecoon.jpg",
    name: "Maine Coon",
    color: "Preto e Branco",
    genre: "Masculino",
    species: "cat",
  },
  {
    urlImage: "images/bengal.jpg",
    name: "Bengal",
    color: "Preto e Amarelo",
    genre: "Feminino",
    species: "cat",
  },
  {
    urlImage: "images/siames.jpg",
    name: "Siamês",
    color: "Amarelo e Preto",
    genre: "Masculino",
    species: "cat",
  },
  {
    urlImage: "images/sphynx.jpg",
    name: "Sphynx",
    color: "Branco",
    genre: "Masculino",
    species: "cat",
  },
  {
    urlImage: "images/neon.jpg",
    name: "Tetra Neon",
    color: "Vermelho e Azul",
    genre: "Masculino",
    species: "fish",
  },
  {
    urlImage: "images/matogrosso.jpg",
    name: "Mato Grosso",
    color: "Laranja",
    genre: "Masculino",
    species: "fish",
  },
  {
    urlImage: "images/limpavidro.jpg",
    name: "Limpa Vidro",
    color: "Verde e Branco",
    genre: "Masculino",
    species: "fish",
  },
  {
    urlImage: "images/tanictis.jpg",
    name: "Tanictis",
    color: "Vermelho",
    genre: "Masculino",
    species: "fish",
  },
  {
    urlImage: "images/acara.jpg",
    name: "Acará Bandeira",
    color: "Preto",
    genre: "Masculino",
    species: "fish",
  },
];

export const Animals = {
  getAll: (): animalType[] => {
    return data;
  },
  getDogs: (): animalType[] => {
    return data.filter((item) => {
      return item.species == "dog";
    });
  },
  getCats: (): animalType[] => {
    return data.filter((item) => {
      return item.species == "cat";
    });
  },
  getFishes: (): animalType[] => {
    return data.filter((item) => {
      return item.species == "fish";
    });
  },
  getSearchAnimal: (name: string): animalType[] => {
    return data.filter(
      (item) =>
        item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
    );
  },
};
