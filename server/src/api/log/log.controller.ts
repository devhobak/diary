import { RequestHandler, Response } from "express";
import { IAddLogReq } from "./log.model";
import * as UserService from "./log.service";

/**
 * Inserts a new log record based
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addLog: RequestHandler = async (
  req: IAddLogReq,
  res: Response
) => {
  try {
    const { datetime, content_title, content_main, content_image } = req.body;
    const result = await UserService.insertLog(req.body);

    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[log.controller][addLog][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when adding new log",
    });
  }
};
