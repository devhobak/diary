import { RequestHandler, Response } from "express";
import { IAddLogReq, IGetLogByDayReq, IGetLogByMonthReq } from "./log.model";
import * as LogService from "./log.service";

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
    const result = await LogService.insertLog(req.body);
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
/**Get log record based on user_id provided
 *
 *@param req Express Request
 *@param res Express Response
 */
export const getLogByDay = async (req: IGetLogByDayReq, res: Response) => {
  try {
    const log = await LogService.getLogByDay(
      req.params.user_id,
      req.params.day
    );
    res.status(200).json({ log });
  } catch (error) {
    console.error(
      "[log.controller][getLogByDay][Error]",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching log",
    });
  }
};
/**Get log record based on user_id provided
 *
 *@param req Express Request
 *@param res Express Response
 */
export const getLogByMonth = async (req: IGetLogByMonthReq, res: Response) => {
  try {
    const log = await LogService.getLogByMonth(
      req.params.user_id,
      req.params.date
    );
    ("2023-04-15");
    res.status(200).json({ log });
  } catch (error) {
    console.error(
      "[log.controller][getLogByMonth][Error]",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching log",
    });
  }
};