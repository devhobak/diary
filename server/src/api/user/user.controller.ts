import { Request, RequestHandler, Response } from "express";
import { IGetUserIdReq, IAddUserReq, IGetUserReq } from "./user.model";
import * as UserService from "./user.service";

/**
 * Inserts a new user record based
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addUser: RequestHandler = async (
  req: IAddUserReq,
  res: Response
) => {
  try {
    const { username, password, email } = req.body;

    if (
      !username ||
      !password ||
      typeof username !== "string" ||
      typeof password !== "string"
    ) {
      res.send("Improper Values");
      return;
    }
    const result = await UserService.insertUser(req.body);

    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[user.controller][addUser][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when adding new user",
    });
  }
};

/**Get user record based on id provided
 *
 *@param req Express Request
 *@param res Express Response
 */

export const getUserByName = async (req: IGetUserReq, res: Response) => {
  try {
    const user = await UserService.getUserByName(req.params.username);
    res.status(200).json({ user });
  } catch (error) {
    console.error(
      "[user.controller][getUserByName][Error]",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching user",
    });
  }
};
