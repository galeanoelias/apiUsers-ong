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
exports.loginUser = void 0;
const serviceCreate_1 = require("../service/serviceCreate");
const jwt_handle_1 = require("../utils/jwt.handle");
//login controller
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userValidation = { email, password };
        const validate = yield (0, serviceCreate_1.validatePassword)(userValidation);
        if (!validate) {
            return res.status(401).send("Wrong email or password");
        }
        //data para encriptar
        const encrypt = {
            _id: validate.id,
        };
        const { _id } = encrypt;
        const userId = _id;
        //sign payload
        const tokenUser = (0, jwt_handle_1.generateToken)(userId);
        (0, jwt_handle_1.generateRefreshToken)(encrypt, res);
        //generar refresh token
        return res.status(201).send({ message: "User succesffully auth", tokenUser });
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.loginUser = loginUser;
