import express, { urlencoded } from "express";
import { Response, Request } from "express";
import dotenv from "dotenv";
import path from "path";
import router from "./routes/api";
import cors from "cors";
const server = express();
server.use(express.json());
server.use(cors());
server.use(router);

dotenv.config();
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));
server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "End point not exist!" });
});

server.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
