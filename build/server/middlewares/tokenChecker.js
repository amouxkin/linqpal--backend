"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../../utilities/token");
var tokenChecker = function (request, response, next) {
    var header = request.headers['authorization'];
    var token = header && header.split(' ')[1];
    if (token) {
        try {
            response.locals.user = token_1.verifyToken(token);
            return next();
        }
        catch (error) { }
    }
    return response.sendStatus(401);
};
exports.default = tokenChecker;
