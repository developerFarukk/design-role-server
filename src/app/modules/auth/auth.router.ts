
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthControllers } from './auth.controller';
import { UserValidation } from '../user/user.validation';

const router = express.Router();

// User register Route
router.post(
    '/register',
    validateRequest(UserValidation.userValidationSchema),
    AuthControllers.registerUser,
);

export const AuthRoutes = router;