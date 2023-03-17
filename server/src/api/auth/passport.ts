import { RequestHandler } from "express";
import * as UserService from "./../user/user.service";
import bcrypt from "bcrypt";

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

export const loginUser: RequestHandler = () => {
  passport.serializeUser((user: string, done: any) => {
    // Strategy 성공 시 호출됨
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((user: string, done: any) => {
    // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    done(null, user); // 여기의 user가 req.user가 됨
  });

  passport.use(
    new LocalStrategy(
      {
        // local 전략을 세움
        username: "username",
        password: "password",
      },
      async (username: string, password: string, done: any) => {
        try {
          const user = await UserService.getUserByName(username);
          if (!user[0].username)
            return done(null, false, { message: "ID does not exist" });
          bcrypt.compare(password, user[0].password, (err, result: boolean) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        } catch (error) {
          console.error(
            "[user.controller][getUserByName][Error] ",
            typeof error === "object" ? JSON.stringify(error) : error
          );
          return done(null, false, { message: "Login Failed" });
        }
      }
    )
  );
};
