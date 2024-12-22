
import express from 'express';
import { AdminControllers } from './admin.controller';

const router = express.Router();

// User Blocked Route
router.patch(
    '/users/:userId/block', AdminControllers.userBlocked,
);

// User unBlocked Route
router.patch(
    '/users/:userId/unblock', AdminControllers.userunBlocked,
);

// Delete Blog by Admin Route
router.delete(
    '/blogs/:id', AdminControllers.deleteBlogByAdmin,
);

export const AdminRoutes = router;