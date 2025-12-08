import { Router } from "express";
const router = Router();
const modulesRoutes = [
// {
//     path:'/customers',
//     route:CustomerRoutes
// },
// {
//     path:'/bikes',
//     route:bikeRoutes
// },
// {
//     path:'/services',
//     route:ServiceRoute
// }
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
