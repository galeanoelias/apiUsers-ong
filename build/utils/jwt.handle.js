"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVerificationErrors = exports.generateRefreshToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("./constants");
const generateToken = (_id) => {
    const expiresIn = 60 * 15;
    try {
        const token = jsonwebtoken_1.default.sign({ _id }, constants_1.jwt_token, { expiresIn });
        return { token, expiresIn };
    }
    catch (error) {
        console.log(error);
    }
};
exports.generateToken = generateToken;
const generateRefreshToken = (payload, res) => {
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jsonwebtoken_1.default.sign({ payload }, constants_1.jwt_refresh, {
            expiresIn,
        });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expiresIn * 1000),
            sameSite: "none"
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.generateRefreshToken = generateRefreshToken;
exports.tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es valida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token no vàlido",
    "No Bearer": "Utiliza formato Bearer",
    "jwt malformed": "JWT formato no valido",
};
