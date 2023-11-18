import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let user: string = "Everson";
  let age: number = 17;
  const status = age >= 18 ? true : false;
  res.render("home", {
    user,
    age,
    showWelcome: false,
    status,
  });
});

router.get("/noticia/:slug", (req: Request, res: Response) => {
  let slug: string = req.params.slug;
  res.send(`Notícia: ${slug}`);
});

router.get("/voos/:origem-:destino", (req: Request, res: Response) => {
  let { origem, destino } = req.params;
  res.send(`Procurando voos de ${origem} até ${destino}`);
});

export default router;
