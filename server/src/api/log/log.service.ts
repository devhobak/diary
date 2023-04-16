import { execute } from "./../utils/mysql.connector";
import { LogQueries } from "./log.queries";
import { ILog } from "./log.model";

/**
 * adds a new active log record
 */
export const insertLog = async (log: ILog) => {
  const result = await execute<{ affectedRows: number }>(LogQueries.AddLog, [
    log.user_id,
    log.datetime,
    log.content_title,
    log.content_main,
    log.content_image,
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
