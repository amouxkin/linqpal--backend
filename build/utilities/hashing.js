"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHashedPassword = exports.createHashedPassword = void 0;
var bcrypt_1 = require("bcrypt");
exports.createHashedPassword = function (password) {
    return bcrypt_1.hashSync(password, parseInt(process.env.SALT_ROUNDS));
};
exports.checkHashedPassword = function (password, hashedPassword) {
    return bcrypt_1.compareSync(password, hashedPassword);
};
