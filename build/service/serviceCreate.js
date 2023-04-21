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
exports.validatePassword = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../database/models/user.model"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
//test
//import { UserRepo } from "../repository/UserRepository";
//funcion para crear un usuario en la bbdd
const createUser = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.create(input);
        return user;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.createUser = createUser;
//funcion que valida pwd. recibe como parametros email y pwd ingresados en request. defino los tipos
//el servicio se consume desde el controlador para la ruta /login
const validatePassword = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    //busco user por email
    const user = yield user_model_1.default.findOne({ email: email });
    if (!user)
        return false;
    const validateUser = yield (0, bcrypt_handle_1.hashPassword)(password);
    //comparo pwd
    const validate = yield (0, bcrypt_handle_1.comparePassword)(validateUser, user.password);
    if (!validate)
        return false;
    return user;
});
exports.validatePassword = validatePassword;
