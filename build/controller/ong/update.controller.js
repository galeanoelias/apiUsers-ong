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
exports.updateOngById = void 0;
const service_update_1 = require("../../service/ong/service.update");
const service_find_1 = require("../../service/ong/service.find");
const bcrypt_handle_1 = require("../../utils/bcrypt.handle");
const jwt_handle_1 = require("../../utils/jwt.handle");
// update user by ID
const updateOngById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ong = yield (0, service_find_1.findById)(id);
    if (!ong) {
        return res.status(404).send("Ong not found");
    }
    const { email, username, password, photo, website, telephone, about_me, ong_types } = req.body;
    const hash = yield (0, bcrypt_handle_1.hashPassword)(password);
    const hashUsername = yield (0, bcrypt_handle_1.hashPassword)(ong.password);
    const newOng = {
        email: email ? email : ong.email,
        username: username ? username : ong.username,
        password: password ? hash : hashUsername,
        photo: photo ? photo : 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
        website: website ? website : ong.website,
        telephone: telephone ? telephone : ong.telephone,
        about_me: about_me ? about_me : ong.about_me,
        ong_types: ong_types ? ong_types : ong.ong_types
    };
    try {
        let ong = yield (0, service_update_1.updateOng)(id, newOng);
        const tokenOng = (0, jwt_handle_1.generateToken)(req.id);
        return res.status(201).json({ tokenOng, ong });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error of server! " });
    }
});
exports.updateOngById = updateOngById;
