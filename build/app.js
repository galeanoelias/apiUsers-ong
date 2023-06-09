"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("config"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDoc_1 = require("./swaggerDoc");
//init app. define and set port
const app = (0, express_1.default)();
// Setting TZ
const tz = process.env.TZ;
// Config whitelist
const whiteList = [process.env.ORIGIN1];
console.log(whiteList);
// Cors
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true,
}));
//middlewares
app.use(express_1.default.static("public"));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
//routes
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const ong_routes_1 = __importDefault(require("./routes/ong.routes"));
app.use("/docs/api/v1", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc_1.specs));
app.use("/auth/user", user_routes_1.default);
app.use("/auth/ong", ong_routes_1.default);
const port = config_1.default.get("port");
app.set("port", port);
exports.default = app;
