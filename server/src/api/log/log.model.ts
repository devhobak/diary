import { Request } from "express";
export interface ILog {
  id: number;
  datetime: string;
  content_title: string;
  content_main: string;
  content_image: string;
}

export interface IAddLogReq extends Request<any, any, ILog> {}
