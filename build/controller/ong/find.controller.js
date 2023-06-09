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
exports.getOngById = exports.getOngs = void 0;
const service_find_1 = require("../../service/ong/service.find");
//find all users in DB
const getOngs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ongs = yield (0, service_find_1.findAll)();
        return res.send(ongs);
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.getOngs = getOngs;
//find one user by ID
const getOngById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ong = yield (0, service_find_1.findById)(id);
        return res.status(200).send(ong);
    }
    catch (err) {
        return res.status(404).send("User not found");
    }
});
exports.getOngById = getOngById;
