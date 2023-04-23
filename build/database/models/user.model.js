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
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
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
    avatar: {
        secure_url: String,
        public_id: String,
    },
    about_me: {
        type: String,
        required: false,
        maxlength: 350
    },
    cv: [{
            type: String,
            default: ''
            // secure_url: String,
            // public_id: String
        }],
    workfield: {
        type: String,
        enum: ['Marketing', 'Tecnologia', 'Administracion', 'Unknown'],
        required: true,
        default: 'Unknown'
    },
    workingmodality: {
        type: String,
        enum: ['Presencial', 'Hibrido', 'Remoto', 'Unknown'],
        required: true,
        default: 'Unknown'
    },
    projects: [{
            type: String,
            default: ''
            // secure_url: String,
            // public_id: String,
        }],
    certifications: [{
            type: String,
            default: ''
            // secure_url: String,
            // public_id: String,
        }]
}, { timestamps: true });
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = this;
        if (!user.isModified("password")) {
            return next();
        }
        try {
            const hash = yield (0, bcrypt_handle_1.hashPassword)(user.password);
            user.password = hash;
            return next();
        }
        catch (err) {
            throw new Error("Error hashing \n" + err);
        }
    });
});
const UserModel = mongoose_1.default.model("User", userSchema);
exports.default = UserModel;
