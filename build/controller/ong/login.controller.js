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
exports.loginOngs = void 0;
const service_create_1 = require("../../service/ong/service.create");
//login controller
const loginOngs = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const ongValidation = yield (0, service_create_1.loginOng)({ email, password });
        const validate = ongValidation;
        if (!validate) {
            return res.status(401).send("Wrong email or password");
        }
        return res.status(201).send({ message: "User succesffully auth", ongValidation });
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.loginOngs = loginOngs;
