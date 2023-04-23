import { Router } from "express";
import { registerOng } from "../controller/ong/register.controller";
import { loginOng } from "../controller/ong/login.controller";
import { getOngById, getOngs } from "../controller/ong/find.controller";
import { updateOngById } from "../controller/ong/update.controller";
import { removeOng } from "../controller/ong/delete.controller";
import { authOngValidator } from "../validations/ong/register.validator";
import { loginValidator } from "../validations/user/login.validations";

const ongRoutes = Router();

ongRoutes.post("/register", authOngValidator, registerOng);

ongRoutes.post("/login", loginValidator, loginOng);

ongRoutes.get("/", getOngs);

ongRoutes.get("/:id", getOngById);

ongRoutes.put("/:id", updateOngById);

ongRoutes.delete("/:id", removeOng);

export default ongRoutes;