import dotenv from "dotenv";
dotenv.config()

export default {
    port: <string>process.env.PORT,
    URI_DB: <string>process.env.URI_DB,
    DB_NAME: <string>process.env.DB_NAME,
};

export const CLOUDINARY_CLOUD_NAME = <string>process.env["CLOUDINARY_USER_NAME"];
export const CLOUDINARY_API_SECRET = <string>process.env["CLOUDINARY_API_SECRET"];
export const CLOUDINARY_API_KEY = <string>process.env["CLOUDINARY_API_KEY"];