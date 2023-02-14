import { Router } from 'express';
import UserRoutes from './user/user.routes';
import AuthRoutes from './auth/login.routes';

const router = Router();

router.use('/user', UserRoutes);
router.use('/auth', AuthRoutes);
export default router;