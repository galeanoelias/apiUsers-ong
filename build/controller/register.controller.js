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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const serviceCreate_1 = require("../service/serviceCreate");
const jwt_handle_1 = require("../utils/jwt.handle");
//register controller
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, email, password } = req.body;
        let newUser = {
            username,
            email,
            password
        };
        const user = yield (0, serviceCreate_1.createUser)(newUser);
        const tokenUser = (0, jwt_handle_1.generateToken)(user.id);
        (0, jwt_handle_1.generateRefreshToken)(user.id, res);
        console.log(user);
        return res.status(201).send({ message: "User registered successfully", tokenUser });
    }
    catch (err) {
        return res.status(409).send("Error at register " + err);
    }
});
exports.registerUser = registerUser;
