"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const user_1 = require("../../../enums/user");
const addOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.order.create({
        data: payload,
    });
});
const getAllOrders = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, role } = user;
    if (role === user_1.ENUM_USER_ROLE.ADMIN) {
        return yield prisma_1.default.order.findMany();
    }
    const orders = yield prisma_1.default.order.findMany({
        where: {
            userId,
        },
    });
    return orders;
});
const getOrderById = (orderId, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, role } = user;
    const order = yield prisma_1.default.order.findUnique({
        where: {
            id: orderId,
        },
    });
    if (!order) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    if (role === user_1.ENUM_USER_ROLE.ADMIN)
        return order;
    if (order.userId !== userId) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'You are not authorized to view this order');
    }
    return order;
});
exports.OrderService = {
    addOrder,
    getAllOrders,
    getOrderById,
};
