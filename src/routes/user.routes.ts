import { Router } from "express";
import { registerUser } from "../controller/register.controller";
import { loginUser } from "../controller/login.controller";
import { getUserById, getUsers } from "../controller/find.controller";
import { updateUserById } from "../controller/update.controller";
import { removeUser } from "../controller/delete.controller";
import { authUserValidator } from "../validations/register.validations";
import { loginValidator } from "../validations/login.validations";
import { requireToken } from "../middleware/tokenVerificator.middleware";
import { requireRefreshToken } from "../middleware/refreshToken.middleware";
//import { verifyFile } from "../middleware/cloudinary.validations";
//import fileUpload from "express-fileupload";
//import { uploadImg } from "../controller/cloudinary.controller";

const userRoutes = Router();

userRoutes.post("/register", authUserValidator, /*uploadImgfileUpload({ useTempFiles: true, tempFileDir: "../../public/uploads"}), verifyFile,*/ registerUser);

userRoutes.post("/login", loginValidator, loginUser);

userRoutes.get("/", getUsers);

userRoutes.get(":id", requireToken, getUserById);

userRoutes.put("/:id", requireRefreshToken, updateUserById);

userRoutes.delete("/:id", requireRefreshToken, removeUser);

export default userRoutes;