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
exports.reviewAndRatingService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const reviewSelectData = {
    id: true,
    review: true,
    rating: true,
    createdAt: true,
    updatedAt: true,
    userId: true,
    user: {
        select: {
            id: true,
            name: true,
            email: true,
            profileImg: true,
        },
    },
    book: {
        select: {
            id: true,
            title: true,
            author: true,
            price: true,
            genre: true,
        },
    },
};
const addReview = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.reviewAndRating.create({
        data: payload,
        select: reviewSelectData,
    });
});
const updateReview = (reviewId, userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield prisma_1.default.reviewAndRating.findUnique({
        where: {
            id: reviewId,
        },
    });
    if (!review) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Review not found');
    }
    if (review.userId !== userId) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized to update this review');
    }
    return yield prisma_1.default.reviewAndRating.update({
        where: {
            id: reviewId,
        },
        data: payload,
        select: reviewSelectData,
    });
});
const getReviewsByBookId = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewAndRating.findMany({
        where: {
            bookId,
        },
        select: reviewSelectData,
    });
    return result;
});
const deleteReviewById = (reviewId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield prisma_1.default.reviewAndRating.findUnique({
        where: {
            id: reviewId,
        },
    });
    if (!review) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Review not found');
    }
    if (review.userId !== userId) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized to delete this review');
    }
    return yield prisma_1.default.reviewAndRating.delete({
        where: {
            id: reviewId,
        },
        select: reviewSelectData,
    });
});
exports.reviewAndRatingService = {
    addReview,
    updateReview,
    getReviewsByBookId,
    deleteReviewById,
};
