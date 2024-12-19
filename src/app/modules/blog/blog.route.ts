
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';
import { BlogsControllers } from './blog.controller';

const router = express.Router();

// Creat Blogs Data
router.post(
    '/create-blog',
    validateRequest(
        BlogValidation.createBlogValidation,
    ),
    BlogsControllers.createblogs,
);

// All Data get of Blog
router.get('/', BlogsControllers.getAllBlog);

export const BlogsRoutes = router;