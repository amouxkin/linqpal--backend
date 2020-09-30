"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../../utilities/token");
var tokenGenerator = function (request, response) {
    var user = response.locals.user;
    response.status(200).send({
        name: user.name,
        id: user._id.toString(),
        isAdmin: user.isAdmin,
        token: token_1.tokenize(user)
    });
};
exports.default = tokenGenerator;
