"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = __importDefault(require("../../routes/users/users"));
var tokenChecker_1 = __importDefault(require("../../middlewares/tokenChecker"));
var adminChecker_1 = __importDefault(require("../../middlewares/adminChecker"));
exports.default = express_1.Router().get('/', tokenChecker_1.default, adminChecker_1.default, users_1.default);
