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
