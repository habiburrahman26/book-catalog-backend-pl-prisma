"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewAndRatingRoute = void 0;
const express_1 = __importDefault(require("express"));
const reviewAndRating_controller_1 = require("./reviewAndRating.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post('/add-review', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), reviewAndRating_controller_1.reviewAndRatingController.addReview);
router.patch('/update-review/:reviewId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), reviewAndRating_controller_1.reviewAndRatingController.updateReview);
router.get('/:bookId', reviewAndRating_controller_1.reviewAndRatingController.getReviewsByBookId);
router.delete('/:reviewId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), reviewAndRating_controller_1.reviewAndRatingController.deleteReviewById);
exports.reviewAndRatingRoute = router;
