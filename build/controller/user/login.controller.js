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
exports.loginUsers = void 0;
const serviceCreate_1 = require("../../service/user/serviceCreate");
//login controller
const loginUsers = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email, password } = body;
        const userValidation = yield (0, serviceCreate_1.loginUser)({ email, password });
        const validate = userValidation;
        if (!validate) {
            return res.status(401).send("Wrong email or password");
        }
        return res.status(201).send({ message: "User succesffully auth", userValidation });
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.loginUsers = loginUsers;
