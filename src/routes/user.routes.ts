import { Router } from "express";
import { registerUser } from "../controller/user/register.controller";
import { loginUsers } from "../controller/user/login.controller";
import { getUserById, getUsers } from "../controller/user/find.controller";
import { updateUserById } from "../controller/user/update.controller";
import { removeUser } from "../controller/user/delete.controller";
import { authUserValidator } from "../validations/user/register.validations";
import { loginValidator } from "../validations/user/login.validations";


const userRoutes = Router();

userRoutes.post("/register", authUserValidator, registerUser);

userRoutes.post("/login", loginValidator, loginUsers);

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserById);

userRoutes.put("/:id", updateUserById);

userRoutes.delete("/:id", removeUser);

export default userRoutes;