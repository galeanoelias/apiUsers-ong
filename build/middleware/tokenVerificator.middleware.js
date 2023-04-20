"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_handle_1 = require("../utils/jwt.handle");
const requireToken = (req, res, next) => {
    var _a;
    try {
        let token = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        if (!token)
            throw new Error("No Bearer");
        token = token.split(" ")[1];
        const _id = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.uid = _id;
        next();
    }
    catch (error) {
        console.log(error.message);
        return res.status(401).send({ error: jwt_handle_1.tokenVerificationErrors });
    }
};
exports.requireToken = requireToken;
