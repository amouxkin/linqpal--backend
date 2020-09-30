"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.tokenize = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
exports.tokenize = function (user) {
    return jsonwebtoken_1.sign(user.toJSON(), process.env.JWT_TOKEN_SECRET, {
        expiresIn: process.env.JWT_DURATION
    });
};
exports.verifyToken = function (token) {
    return jsonwebtoken_1.verify(token, process.env.JWT_TOKEN_SECRET);
};
