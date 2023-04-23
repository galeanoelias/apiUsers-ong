"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_controller_1 = require("../controller/ong/register.controller");
const login_controller_1 = require("../controller/ong/login.controller");
const find_controller_1 = require("../controller/ong/find.controller");
const update_controller_1 = require("../controller/ong/update.controller");
const delete_controller_1 = require("../controller/ong/delete.controller");
const register_validator_1 = require("../validations/ong/register.validator");
const login_validations_1 = require("../validations/user/login.validations");
const ongRoutes = (0, express_1.Router)();
ongRoutes.post("/register", register_validator_1.authOngValidator, register_controller_1.registerOng);
ongRoutes.post("/login", login_validations_1.loginValidator, login_controller_1.loginOngs);
ongRoutes.get("/", find_controller_1.getOngs);
ongRoutes.get("/:id", find_controller_1.getOngById);
ongRoutes.put("/:id", update_controller_1.updateOngById);
ongRoutes.delete("/:id", delete_controller_1.removeOng);
exports.default = ongRoutes;