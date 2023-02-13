import { Router, } from 'express';
import * as Controller from './user.controller';

const router = Router();

router
    .route('/')
    .post(
        Controller.addUser
    ); 

export default router;