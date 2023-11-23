import { Request, Response } from "express";

const ageGet = (req: Request, res: Response) => {
  const { age } = req.query;
  let birthday: number = 0;
  if (age) {
    let yearBirthday: number = parseInt(age as string);
    let currentYear: number = new Date().getFullYear();
    birthday = currentYear - yearBirthday;
  }
  res.render("age", {
    birthday,
  });
};

const agePost = (req: Request, res: Response) => {
  const { age } = req.body;
  let birthday: number = 0;
  if (age) {
    let yearBirthday: number = parseInt(age as string);
    let currentYear: number = new Date().getFullYear();
    birthday = currentYear - yearBirthday;
  }
  res.render("age", {
    birthday,
  });
};

export { ageGet, agePost };
