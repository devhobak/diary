import express, { Express, Request, Response } from "express";
import * as MySQLConnector from "./api/utils/mysql.connector";
import cors from "cors";
import session from "express-session";
import passport from "passport";

const app: Express = express();
const port = 5000;

// create MySQL database pool
MySQLConnector.init();

//Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: "code",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
