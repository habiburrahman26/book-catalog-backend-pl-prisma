"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const category_route_1 = require("../modules/category/category.route");
const book_route_1 = require("../modules/book/book.route");
const order_route_1 = require("../modules/order/order.route");
const reviewAndRating_route_1 = require("../modules/ReviewAndRating/reviewAndRating.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: auth_route_1.AuthRouter,
    },
    {
        path: '/users',
        routes: user_route_1.UserRouter,
    },
    {
        path: '/categories',
        routes: category_route_1.CategoryRoute,
    },
    {
        path: '/books',
        routes: book_route_1.bookRoute,
    },
    {
        path: '/orders',
        routes: order_route_1.OrderRoute,
    },
    {
        path: '/reviews',
        routes: reviewAndRating_route_1.reviewAndRatingRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.AppRouter = router;
