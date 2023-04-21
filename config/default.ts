import dotenv from "dotenv";
dotenv.config()

export default {
    port: <string>process.env.PORT,
    URI_DB: <string>process.env.URI_DB,
    DB_NAME: <string>process.env.DB_NAME,
};