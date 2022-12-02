import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getEstimation } from "./src/estimation-service/estimation-helpers";
import { createLongerTasks } from "./src/longer-tasks/longerTask-helpers";

dotenv.config();
const app: Express = express();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const treshold = 500;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/estimation-time", (req: Request, res: Response) => {
  const estimation = getEstimation();
  console.log(estimation);
  if (estimation <= treshold) {
    res.send(`Estimation: ${estimation}`);
  } else {
    res.send(createLongerTasks(estimation));
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
