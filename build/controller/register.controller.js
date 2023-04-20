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
exports.registerUser = void 0;
const serviceCreate_1 = require("../service/serviceCreate");
const jwt_handle_1 = require("../utils/jwt.handle");
const cloudinary_service_1 = __importDefault(require("../service/cloudinary.service"));
//register controller
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let { username, firstname, lastname, email, password } = req.body;
        let newUser = {
            username,
            firstname,
            lastname,
            email,
            password,
        };
        // if (req.files?.avatar) {
        //   try {
        //     const result = await uploadImage(req.body.files.avatar)
        //     avatar = {
        //       public_id: <string>avatar.public_id,
        //       secure_url: <string>avatar.secure_url
        //     }
        //     await fs.unlink(req.body.files.avatar);
        //     return result;
        //   } catch (error) {
        //     console.log(error);
        //   }
        // };
        // console.log(avatar)
        if ((_a = req.body.avatar) === null || _a === void 0 ? void 0 : _a.avatar) {
            try {
                let avatarPath = req.body.Buffer;
                let avatarUrl = yield cloudinary_service_1.default.uploadImage(avatarPath);
                res.send({ succes: true, avatarUrl });
                console.log(avatarUrl);
            }
            catch (error) {
                res.status(500).send({ succes: false, error });
            }
        }
        const user = yield (0, serviceCreate_1.createUser)(newUser);
        const tokenUser = (0, jwt_handle_1.generateToken)(user.id);
        (0, jwt_handle_1.generateRefreshToken)(user.id, res);
        console.log(user);
        return res.status(201).send({ message: "User registered successfully", tokenUser });
    }
    catch (err) {
        return res.status(409).send("Error at register " + err);
    }
});
exports.registerUser = registerUser;
