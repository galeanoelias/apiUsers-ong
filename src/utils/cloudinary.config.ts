import {  v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY } from "../config/default";

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});

export default cloudinary

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