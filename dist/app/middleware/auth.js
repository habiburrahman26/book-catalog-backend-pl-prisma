"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JwtHelpers_1 = require("../../helpers/JwtHelpers");
const config_1 = __importDefault(require("../config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const auth = (...roles) => {
    return (req, res, next) => {
        var _a;
        try {
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (!token)
                throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
            //check token is valid
            const decoded = JwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
            req.user = decoded;
            if (roles.length && !roles.includes(decoded.role))
                throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'FORBIDDEN access');
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.default = auth;
