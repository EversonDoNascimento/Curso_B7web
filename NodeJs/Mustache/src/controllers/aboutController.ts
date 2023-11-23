import { Request, Response } from "express";

const about = (req: Request, res: Response) => {
  res.render("about", {});
};

export { about };
