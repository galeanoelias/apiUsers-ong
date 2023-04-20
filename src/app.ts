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
app.use(cors({
    origin: function(origin, callback){
        console.log("Conectando=>", origin);
        if (!origin || whiteList.includes(origin)) {
            return callback(null, origin);
        }
        return "Error de CORS origin: " + origin + " No autorizado!";
    },
    credentials: true,
    })
);

//middlewares
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

//routes
import userRoutes from "./routes/user.routes";

app.use("/docs/api/v1", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/auth/user", userRoutes);


const port = config.get<number>("port");
app.set("port", port);

export default app;