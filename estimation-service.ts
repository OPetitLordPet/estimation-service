import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getEstimation } from "./src/estimation-service/estimation-helpers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const estimation = getEstimation();

app.get("/", (req: Request, res: Response) => {
  res.send(`Estimation: ${estimation}`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
