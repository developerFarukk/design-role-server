import { Router } from "express";
import { BlogsRoutes } from "../modules/blog/blog.route";
import { ProjectRoutes } from "../modules/projects/project.route";

const router = Router();

const moduleRoutes = [
    
    {
        path: '/blogs',
        route: BlogsRoutes,
    },
    {
        path: '/projects',
        route: ProjectRoutes,
    },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;