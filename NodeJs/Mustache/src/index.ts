import express from "express";
import mustacheExpress from "mustache-express";
import router from "./routes/routes";
import path from "path";
const server = express();

server.set("view engine", "mustache");

server.set("views", path.join(__dirname, "views"));

server.engine("mustache", mustacheExpress());

server.use(router);
server.listen(3000, () => {
  console.log("Running in the port 3000");
});
