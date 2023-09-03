"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const order_validation_1 = require("./order.validation");
const router = express_1.default.Router();
router.post('/create-order', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), (0, validateRequest_1.default)(order_validation_1.OrderValidation.create), order_controller_1.OrderController.addOrder);
// router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllOrders)
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getAllOrders);
router.get('/:orderId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getOrderById);
exports.OrderRoute = router;
