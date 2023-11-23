import { Response, Request } from "express";
import { Animals } from "../models/allAnimals";
import menuActive from "../helpers/menuActive";
export const home = (req: Request, res: Response) => {
  const valueActive = menuActive("all");

  const banner = {
    title: "Todos os animais",
    urlBanner: "images/allanimals.jpg",
  };
  let animals = Animals.getAll();
  res.render("home", {
    valueActive,
    banner,
    animals,
  });
};

export const cats = (req: Request, res: Response) => {
  const valueActive = menuActive("cat");
  const banner = {
    title: "Todos os gatos",
    urlBanner: "images/banner_cat.jpg",
  };
  let allCats = Animals.getCats;
  res.render("cats", {
    valueActive,
    banner,
    allCats,
  });
};

export const dogs = (req: Request, res: Response) => {
  const valueActive = menuActive("dog");
  const banner = {
    title: "Todos os cachorros",
    urlBanner: "images/banner_dog.jpg",
  };
  let allDogs = Animals.getDogs();
  res.render("dogs", {
    valueActive,
    banner,
    allDogs,
  });
};

export const fishes = (req: Request, res: Response) => {
  const valueActive = menuActive("fish");
  const banner = {
    title: "Todos os peixes",
    urlBanner: "images/banner_fish.jpg",
  };
  let allFishes = Animals.getFishes();
  res.render("fishes", {
    valueActive,
    banner,
    allFishes,
  });
};
