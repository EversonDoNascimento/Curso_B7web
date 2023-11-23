import { Request, Response } from "express";

const name = (req: Request, res: Response) => {
  let { name, age } = req.query;

  res.render("nome", {
    name,
    age,
  });
};

export { name };
