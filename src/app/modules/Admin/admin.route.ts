
import express from 'express';
import { AdminControllers } from './admin.controller';

const router = express.Router();

// User Blocked Route
router.patch(
    '/:userId/block', AdminControllers.userBlocked,
);

// User unBlocked Route
router.patch(
    '/:userId/unblock', AdminControllers.userunBlocked,
);

export const AdminRoutes = router;