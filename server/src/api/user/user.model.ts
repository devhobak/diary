import { Request } from 'express';

export interface IUser {
    id: number;
    username: string;
    password: string;
    isAdmin: number;
};

export interface IAddUserReq extends Request<any, any, IUser> { }