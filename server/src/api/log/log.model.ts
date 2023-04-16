import { Request } from "express";
export interface ILog {
  id: number;
  user_id: string;
  datetime: string;
  content_title: string;
  content_main: string;
  content_image: string;
}

export interface IAddLogReq extends Request<any, any, ILog> {}
export interface IGetLogByDayReq
  extends Request<{ user_id: ILog["user_id"]; day: ILog["datetime"] }> {}
