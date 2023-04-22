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


const userRoutes = Router();

userRoutes.post("/register", authUserValidator, registerUser);

userRoutes.post("/login", loginValidator, loginUser);

userRoutes.get("/", getUsers);

userRoutes.get(":id", requireToken, getUserById);

userRoutes.put("/:id", requireRefreshToken, updateUserById);

userRoutes.delete("/:id", requireRefreshToken, removeUser);

export default userRoutes;