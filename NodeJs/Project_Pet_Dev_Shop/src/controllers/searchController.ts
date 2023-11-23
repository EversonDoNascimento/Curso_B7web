import { Response, Request } from "express";
import { Animals } from "../models/allAnimals";

export const search = (req: Request, res: Response) => {
  const { q } = req.query;
  const busca: any = q;
  let condition = false;
  const yourSearch = Animals.getSearchAnimal(busca);
  if (yourSearch.length > 0) {
    condition = true;
  }
  //Animals.getSearchAnimal(search);
  res.render("search", {
    condition,
    listAnimals: yourSearch,
  });
};
