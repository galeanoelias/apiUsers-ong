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
exports.updateUserById = void 0;
const serviceUpdate_1 = require("../../service/user/serviceUpdate");
const serviceFind_1 = require("../../service/user/serviceFind");
const bcrypt_handle_1 = require("../../utils/bcrypt.handle");
const jwt_handle_1 = require("../../utils/jwt.handle");
// update user by ID
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, serviceFind_1.findById)(id);
    if (!user) {
        return res.status(404).send("User not found");
    }
    const { email, username, firstname, lastname, password, avatar, workfield, workingmodality } = req.body;
    const hash = yield (0, bcrypt_handle_1.hashPassword)(password);
    const hashUsername = yield (0, bcrypt_handle_1.hashPassword)(user.password);
    const newUser = {
        email: email ? email : user.email,
        username: username ? username : user.username,
        firstname: firstname ? firstname : user.firstname,
        lastname: lastname ? lastname : user.lastname,
        password: password ? hash : hashUsername,
        avatar: avatar ? avatar : 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
        workfield: workfield ? workfield : user.workfield,
        workingmodality: workingmodality ? workingmodality : user.workingmodality
    };
    try {
        let user = yield (0, serviceUpdate_1.updateUser)(id, newUser);
        const tokenUser = (0, jwt_handle_1.generateToken)(req.id);
        return res.status(201).json({ tokenUser, user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error of server! " });
    }
});
exports.updateUserById = updateUserById;
