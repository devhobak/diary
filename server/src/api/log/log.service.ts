import { execute } from "./../utils/mysql.connector";
import { LogQueries } from "./log.queries";
import { ILog } from "./log.model";

/**
 * adds a new active log record
 */
export const insertLog = async (log: ILog) => {
  const result = await execute<{ affectedRows: number }>(LogQueries.AddLog, [
    log.user_id,
    log.content_title,
    log.content_main,
  ]);
  return result.affectedRows > 0;
};
/**
 * gets a log based on day provided
 */
export const getLogByDay = async (
  user_id: ILog["user_id"],
  day: ILog["datetime"]
) => {
  return execute<ILog[]>(LogQueries.GetLogByDay, [user_id, day]);
};
/**
 * gets a log based on month provided
 */
export const getLogByMonth = async (
  user_id: ILog["user_id"],
  year: ILog["year"],
  month: ILog["month"]
) => {
  return execute<ILog[]>(LogQueries.GetLogByMonth, [user_id, year, month]);
};
/**
 * updates log information based on the id provided
 */
export const updateLog = async (log: ILog) => {
  const result = await execute<{ affectedRows: number }>(
    LogQueries.UpdateLogById,
    [log.content_title, log.content_main, log.id]
  );
  return result.affectedRows > 0;
};
