import { Response, Request } from "express";

export const home = (req: Request, res: Response) => {
  res.render("home", {
    hello: "Hello world",
  });
};

export const cats = (req: Request, res: Response) => {
  res.render("home", {
    hello: "Hello world",
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render("home", {
    hello: "Hello world",
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render("home", {
    hello: "Hello world",
  });
};
