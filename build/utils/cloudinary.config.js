"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const default_1 = require("../config/default");
cloudinary_1.v2.config({
    cloud_name: default_1.CLOUDINARY_CLOUD_NAME,
    api_key: default_1.CLOUDINARY_API_KEY,
    api_secret: default_1.CLOUDINARY_API_SECRET,
    secure: true
});
exports.default = cloudinary_1.v2;
// const filePath = "volunteers/"
// export const uploadImage = async (filePath: string) => {
//     return await cloudinary.uploader.upload(filePath, {
//         upload_preset: 'syxayofd',
//         folder: "Volunteers/",
//         use_filename: true,
//         unique_filenamen:false,
//         resource_type: 'auto'
//     });
// };
// export const deleteImage = async (publicId: string) => {
//     return await cloudinary.uploader.destroy(publicId)
// };
