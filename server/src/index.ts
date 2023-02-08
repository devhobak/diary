import express, { Express, Request, Response } from "express";

import * as MySQLConnector from "./api/utils/mysql.connector";
const app: Express = express();
const port = 5000;

// create database pool
MySQLConnector.init();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
