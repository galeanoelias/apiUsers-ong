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
exports.removeOng = void 0;
const service_delete_1 = require("../../service/ong/service.delete");
// User Delete of the BBDD
const removeOng = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { email, password, username } = req.body;
        if (!email || !password || !username)
            return res.status(404).send("No existe el link");
        const ongDelete = { email, password, username };
        const ongRemove = yield (0, service_delete_1.deleteOng)(id, ongDelete);
        return res.status(200).send(`El usuario ${ongRemove} fue eliminado`);
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).send("Fomrato User ID not found");
        }
        return res.status(500).send("Error del servidor");
    }
});
exports.removeOng = removeOng;
