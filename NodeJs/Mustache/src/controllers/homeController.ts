import { Request, Response } from "express";
import { Product } from "./../models/Product";
const home = (req: Request, res: Response) => {
  let onlyName = Product.getOnlyName();
  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(1000);
  const user = { name: "Everson", age: 50 };
  res.render("home", {
    products: list,
    productsList: onlyName,
    expensiveList,
    showWelcome: user.age >= 50 ? true : false,
  });
};

export { home };
