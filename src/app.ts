import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
dotenv.config()
import config from "config";
import cors from "cors";
import morgan from "morgan";
// Swagger
import swaggerUI from "swagger-ui-express";
import { specs } from "./swaggerDoc";

//init app. define and set port
const app = express();

// Setting TZ
const tz = process.env.TZ;

// Config whitelist
const whiteList = [process.env.ORIGIN1]
console.log(whiteList);
// Cors
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
)
//middlewares
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

//routes
import userRoutes from "./routes/user.routes";
import ongRoutes from "./routes/ong.routes";

app.use("/docs/api/v1", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/auth/user", userRoutes);
app.use("/auth/ong", ongRoutes);


const port = config.get<number>("port");
app.set("port", port);

export default app;