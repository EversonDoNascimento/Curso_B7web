import { Request, Response } from "express";
import { Phrase } from "../models/Phrases";
export const apiController = {
  createPhrase: async (req: Request, res: Response) => {
    const { author, phrase } = req.body;
    await Phrase.create({
      author,
      phrase,
    });
    res.send({ statusCode: 200 });
    //res.json({ author: author, phrase: phrase });
  },
  random: async (req: Request, res: Response) => {
    const phraseLength = await Phrase.findAll();
    const randomNumber = Math.floor(Math.random() * phraseLength.length);
    if (phraseLength) {
      res.json({
        author: phraseLength[randomNumber].author,
        phrase: phraseLength[randomNumber].phrase,
      });
    } else {
      res.json({ message: "list void" });
    }
  },

  phrases: async (req: Request, res: Response) => {
    const phrases = await Phrase.findAll();
    res.json(phrases);
  },
  deletePhrase: async (req: Request, res: Response) => {
    try {
      const { id } = req.body;
      const deleteOne = await Phrase.findByPk(id);
      if (deleteOne) {
        await deleteOne.destroy();
        res.status(200);
        res.json({ statusCode: 200 });
      } else {
        console.log("Phrase not exist");
        res.status(404);
        res.json({ statusCode: 404 });
      }
    } catch (error) {
      console.log(error);
      res.status(404);
    }
  },
  updatePhrase: async (req: Request, res: Response) => {
    const { id, author, phrase } = req.body;
    const phraseVerify = await Phrase.findByPk(id);
    if (phraseVerify) {
      if (id) {
        if (author.trim() !== "" && phrase.trim() !== "") {
          await Phrase.update({ author, phrase }, { where: { id: id } });
          res.status(201);
          res.send({ statusCode: 201 });
        } else if (author.trim() !== "") {
          await Phrase.update({ author }, { where: { id: id } });
          res.status(201);
          res.send({ statusCode: 201 });
        } else if (phrase.trim() !== "") {
          await Phrase.update({ phrase }, { where: { id: id } });
          res.status(201);
          res.send({ statusCode: 201 });
        } else {
          res.send({ message: "Not found" });
          res.status(404);
        }
      } else {
        res.send({ message: "Not found" });
        res.status(404);
      }
    } else {
      res.send({ message: "Id not Exist" });
      res.status(404);
    }
  },
};
