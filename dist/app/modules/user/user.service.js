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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const userSelectedFields = {
    id: true,
    name: true,
    email: true,
    role: true,
    contactNo: true,
    address: true,
    profileImg: true,
    createdAt: true,
    updatedAt: true,
};
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findMany({
        select: userSelectedFields,
    });
    return result;
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({
        where: {
            id: id,
        },
        select: userSelectedFields,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    return result;
});
const updateUserById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload, data = __rest(payload
    // check if user exists
    , ["email"]);
    // check if user exists
    yield getUserById(id);
    //email address can't be updated
    if (email) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Email address can not be updated');
    }
    const result = yield prisma_1.default.user.update({
        where: {
            id: id,
        },
        data,
    });
    return result;
});
const deleteUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // check if user exists
    yield getUserById(id);
    const result = yield prisma_1.default.user.delete({
        where: {
            id: id,
        },
        select: userSelectedFields,
    });
    return result;
});
exports.UserService = {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
};
