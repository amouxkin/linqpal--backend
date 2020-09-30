"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var login_1 = __importDefault(require("../../routes/auth/login"));
var register_1 = __importDefault(require("../../routes/auth/register"));
var tokenGenerator_1 = __importDefault(require("../../middlewares/tokenGenerator"));
var authenticationError_1 = __importDefault(require("../../middlewares/authenticationError"));
exports.default = express_1.Router()
    .post('/login', login_1.default, authenticationError_1.default, tokenGenerator_1.default)
    .post('/register', register_1.default, authenticationError_1.default, tokenGenerator_1.default);
