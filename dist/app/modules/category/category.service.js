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
exports.CategoryService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const insertIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.category.create({
        data: payload,
    });
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.category.findMany();
});
const getCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.findUnique({
        where: {
            id,
        },
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Category not found');
    return result;
});
const updateCategoryById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield getCategoryById(id);
    const result = yield prisma_1.default.category.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield getCategoryById(id);
    const result = yield prisma_1.default.category.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.CategoryService = {
    insertIntoDB,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
};
