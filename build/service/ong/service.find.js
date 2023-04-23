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
exports.findById = exports.findAll = void 0;
const ong_models_1 = __importDefault(require("../../database/models/ong.models"));
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ongs = yield ong_models_1.default.find();
        return ongs;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ong = yield ong_models_1.default.findOne({ _id: id });
        if (!ong)
            return false;
        const ongInfo = ong;
        return ongInfo;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findById = findById;
