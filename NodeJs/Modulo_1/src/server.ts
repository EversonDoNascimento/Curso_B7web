import express, { Request, Response } from "express";
import mainRouter from "./routes/app";
import path from "path";
import mustacheExpress from "mustache-express";
const server = express();
server.use(mainRouter);
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustacheExpress());
const port = 3000;

server.listen(port, () => {
  console.log("Servidor rodando na porta: ", port);
});
