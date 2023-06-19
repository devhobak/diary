import { Request } from "express";
export interface ILog {
  id: number;
  user_id: string;
  datetime: string;
  year: string;
  month: string;
  content_title: string;
  content_main: string;
  content_image: string;
  color: string;
  cursor: string;
  limit: number;
}

export interface IAddLogReq extends Request<any, any, ILog> {}
export interface IGetLogByDayReq
  extends Request<{ user_id: ILog["user_id"]; day: ILog["datetime"] }> {}
export interface IGetLogByMonthReq
  extends Request<{
    user_id: ILog["user_id"];
    year: ILog["year"];
    month: ILog["month"];
  }> {}
export interface IGetLogsListReq
  extends Request<{
    user_id: ILog["user_id"];
    cursor: ILog["cursor"];
    limit: ILog["limit"];
  }> {}
export interface IUpdateLogReq extends Request<{ id: ILog["id"] }, any, ILog> {}
