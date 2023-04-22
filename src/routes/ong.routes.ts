import { Router } from "express";
import { registerOng } from "../controller/ong/register.controller";
import { loginOng } from "../controller/ong/login.controller";
import { getOngById, getOngs } from "../controller/ong/find.controller";
import { updateOngById } from "../controller/ong/update.controller";
import { removeOng } from "../controller/ong/delete.controller";
import { authOngValidator } from "../validations/ong/register.validator";
import { loginValidator } from "../validations/login.validations";
import { requireToken } from "../middleware/tokenVerificator.middleware";
import { requireRefreshToken } from "../middleware/refreshToken.middleware";
//import { verifyFile } from "../middleware/cloudinary.validations";
//import fileUpload from "express-fileupload";
//import { uploadImg } from "../controller/cloudinary.controller";

const ongRoutes = Router();

ongRoutes.post("/register", authOngValidator, /*uploadImgfileUpload({ useTempFiles: true, tempFileDir: "../../public/uploads"}), verifyFile,*/ registerOng);

ongRoutes.post("/login", loginValidator, loginOng);

ongRoutes.get("/", getOngs);

ongRoutes.get(":id", requireToken, getOngById);

ongRoutes.put("/:id", requireRefreshToken, updateOngById);

ongRoutes.delete("/:id", requireRefreshToken, removeOng);

export default ongRoutes;