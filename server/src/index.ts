import express, { Express, Request, Response } from "express";
import * as MySQLConnector from "./api/utils/mysql.connector";
import cors from "cors";
import routes from "./api/routes";
import dotenv from "dotenv";
import mysql from "mysql2";
import cookieParser from "cookie-parser";
import session from "express-session";
const passport = require("passport"); // 여기와
const passportConfig = require("./api/auth/passport"); // 여기

const app: Express = express();
const port = 5000;

// create MySQL database pool
MySQLConnector.init();

//Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser("secret"));
app.use(session({ secret: "secret" }));
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
passportConfig.loginUser(); // 이 부분 추가

//Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.use("/api/", routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
