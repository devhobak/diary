import { Request, RequestHandler, Response } from 'express';
import {
    IUser,
    IAddUserReq
} from './user.model';
import * as UserService from './user.service';

/**
 * Inserts a new team record based
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addUser: RequestHandler = async (req: IAddUserReq, res: Response) => {
    try {
        const {username, password} = req.body;

        if(!username || !password || typeof username !== "string" || typeof password !=="string") {
          res.send("Improper Values");
          return;
        }
        const result = await UserService.insertUser(req.body);
      
        res.status(200).json({
            result
        });
    } catch (error) {
      console.error('[user.controller][addUser][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
        message: 'There was an error when adding new user'
      });
    }
  };