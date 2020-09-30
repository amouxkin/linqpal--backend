"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
var crypto_1 = require("crypto");
var encoding = 'hex';
exports.encrypt = function (data) {
    var initialiseVector = crypto_1.randomBytes(16);
    var cipher = crypto_1.createCipheriv(process.env.ENCRYPTION_ALGORITHM, process.env.ENCRYPTION_KEY, initialiseVector);
    return {
        initialiseVector: initialiseVector.toString(encoding),
        data: Buffer.concat([cipher.update(data), cipher.final()]).toString(encoding)
    };
};
exports.decrypt = function (encrypted) {
    var decipher = crypto_1.createDecipheriv(process.env.ENCRYPTION_ALGORITHM, process.env.ENCRYPTION_KEY, Buffer.from(encrypted.initialiseVector, encoding));
    return Buffer.concat([
        decipher.update(Buffer.from(encrypted.data, encoding)),
        decipher.final()
    ]).toString();
};
