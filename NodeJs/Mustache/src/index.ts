import express from "express";
import mustacheExpress from "mustache-express";
import router from "./routes/routes";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const server = express();

server.set("view engine", "mustache");

server.set("views", path.join(__dirname, "views"));

server.engine("mustache", mustacheExpress());

server.use(express.urlencoded({ extended: true }));
server.use(router);
server.listen(process.env.PORT, () => {
  console.log("Running in the port 3000");
});
