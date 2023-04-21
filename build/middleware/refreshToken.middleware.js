"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRefreshToken = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireRefreshToken = (req, res, next) => {
    try {
        const refreshTokenCookie = req.cookies.refreshToken;
        if (!refreshTokenCookie)
            throw new Error("No existe el token");
        const _id = jsonwebtoken_1.default.verify(refreshTokenCookie, process.env.JWT_REFRESH);
        req.uid = _id;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ error: jwt_handle_1.tokenVerificationErrors });
    }
};
exports.requireRefreshToken = requireRefreshToken;
