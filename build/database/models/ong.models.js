"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_handle_1 = require("../../utils/bcrypt.handle");
const ongSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    telephone: {
        type: Number
    },
    photo: {
        type: String
    },
    ong_types: {
        type: String,
        enum: ['Presencial', 'Hibrido', 'Remoto', 'Unknown'],
        required: true,
        default: 'Unknown'
    }
}, { timestamps: true });
ongSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        let ong = this;
        if (!ong.isModified("password")) {
            return next();
        }
        try {
            const hash = yield (0, bcrypt_handle_1.hashPassword)(ong.password);
            ong.password = hash;
            return next();
        }
        catch (err) {
            throw new Error("Error hashing \n" + err);
        }
    });
});
const OngModel = mongoose_1.default.model("Ong", ongSchema);
exports.default = OngModel;
