"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
