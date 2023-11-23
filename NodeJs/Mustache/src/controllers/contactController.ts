import { Request, Response } from "express";

const contact = (req: Request, res: Response) => {
  res.render("contact", {});
};

export { contact };
