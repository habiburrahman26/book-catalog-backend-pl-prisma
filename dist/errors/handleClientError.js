"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleClientError = (error) => {
    var _a, _b, _c;
    let errors = [];
    let message = '';
    const statusCode = 400;
    if (error.code === 'P2025') {
        message = ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || 'Record not found!';
        errors = [
            {
                path: '',
                message,
            },
        ];
    }
    else if (error.code === 'P2002') {
        let fieldName = (_c = (_b = error.meta) === null || _b === void 0 ? void 0 : _b.target) === null || _c === void 0 ? void 0 : _c[0];
        message = `Record already exists! with this ${fieldName}`;
        errors = [
            {
                path: '',
                message,
            },
        ];
    }
    else if (error.code === 'P2003') {
        if (error.message.includes('delete()` invocation:')) {
            message = 'Delete failed';
            errors = [
                {
                    path: '',
                    message,
                },
            ];
        }
    }
    return {
        statusCode,
        message,
        errorMessages: errors,
    };
};
exports.default = handleClientError;
//"//\nInvalid `prisma.semesterRegistration.delete()` invocation:\n\n\nAn operation failed because it depends on one or more records that were required but not found. Record to delete does not exist.",
