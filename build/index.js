"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./server/index"));
var http_1 = require("http");
var server = http_1.createServer(index_1.default);
server
    .listen(process.env.PORT)
    .on('listening', function () {
    return console.log('Server is running on. 🚀', server.address());
})
    .on('close', function () { return console.log('Server has shut down.'); });
