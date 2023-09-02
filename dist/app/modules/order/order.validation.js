"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        orderedBooks: zod_1.z.array(zod_1.z.object({
            bookId: zod_1.z.string(),
            quantity: zod_1.z.number().int().positive(),
        }), {
            required_error: 'orderedBooks is required',
        }),
    }),
});
exports.OrderValidation = {
    create,
};
