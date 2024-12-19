import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { BlogsRoutes } from "../modules/blog/blog.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/blogs',
        route: BlogsRoutes,
    },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;