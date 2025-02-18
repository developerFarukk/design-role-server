
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidation } from './project.validation';
import { ProjectControllers } from './project.controller';

const router = express.Router();


// Creat Project Data Route
router.post(
    '/',
    validateRequest(ProjectValidation.createProjectValidation),
    ProjectControllers.createProject
);







export const ProjectRoutes = router;