
import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidation } from './project.validation';
import { ProjectControllers } from './project.controller';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();


// Creat Project Data Route
router.post(
    '/create-project',
    upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    validateRequest(ProjectValidation.createProjectValidation),
    ProjectControllers.createProject
);







export const ProjectRoutes = router;