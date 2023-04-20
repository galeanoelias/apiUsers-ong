"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOUDINARY_API_KEY = exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_CLOUD_NAME = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT,
    URI_DB: process.env.URI_DB,
    DB_NAME: process.env.DB_NAME,
};
exports.CLOUDINARY_CLOUD_NAME = process.env["CLOUDINARY_USER_NAME"];
exports.CLOUDINARY_API_SECRET = process.env["CLOUDINARY_API_SECRET"];
exports.CLOUDINARY_API_KEY = process.env["CLOUDINARY_API_KEY"];
