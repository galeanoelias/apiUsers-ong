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
exports.registerOng = void 0;
const service_create_1 = require("../../service/ong/service.create");
const jwt_handle_1 = require("../../utils/jwt.handle");
//register controller
const registerOng = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, email, password } = req.body;
        let newOng = {
            username,
            email,
            password
        };
        const ong = yield (0, service_create_1.createOng)(newOng);
        const tokenOng = (0, jwt_handle_1.generateToken)(ong.id);
        (0, jwt_handle_1.generateRefreshToken)(ong.id, res);
        console.log(ong);
        return res.status(201).send({ message: "User registered successfully", tokenOng });
    }
    catch (err) {
        return res.status(409).send("Error at register " + err);
    }
});
exports.registerOng = registerOng;
