"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var authenticationErrorHandler = function (request, response, next) {
    var _a;
    var error = response.locals.error;
    if (!error)
        return next();
    switch (error.constructor) {
        case mongoose_1.Error:
            response.status(401).send();
            break;
        default:
            response.status(400).send((_a = error.message) !== null && _a !== void 0 ? _a : error);
    }
};
exports.default = authenticationErrorHandler;
