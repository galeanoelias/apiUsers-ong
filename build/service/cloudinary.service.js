"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_config_1 = __importDefault(require("../utils/cloudinary.config"));
class cloudinaryService {
    uploadImage(tempImagePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield cloudinary_config_1.default.uploader.upload(tempImagePath);
            }
            catch (error) {
                console.log('Error al subir imagen a Cloudinary:', error);
                throw new Error('Error al subir imagen a Cloudinary');
            }
        });
    }
}
exports.default = new cloudinaryService();
// Upload
// export const uploadImage = async (tempFilePath: string): Promise<any> => {
//         const res = await cloudinary.uploader.upload(tempFilePath, {
//                 upload_preset: 'syxayofd',
//                 public_id: `${Date.now()}`,
//                 folder: "Volunteers/",
//                 use_filename: true,
//                 unique_filenamen:false,
//                 resource_type: 'auto'
//         })
//         res.then((data: { public_id: string; secure_url: string; }) => {
//           console.log(data);
//           console.log(data.secure_url);
//         }).catch((err: any) => {
//           console.log(err);
//         });
// }
// const url = cloudinary.url()
// console.log(url)
// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})
// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });
/*
export const uploadImage = async (filePath: string) => {
    return await cloudinary.uploader.upload(filePath, {
        upload_preset: 'syxayofd',
        folder: "Volunteers/",
        use_filename: true,
        unique_filenamen:false,
        resource_type: 'auto'
    });
};
*/
// class CloudinaryServiceImg {
//         async uploadImage(file:Buffer): Promise<string> {
//                 // const options = { folder };
//                 const folderVolunteer = {
//                         upload_preset: 'syxayofd',
//                         folder: "Volunteers/",
//                         use_filename: true,
//                         unique_filenamen:false,
//                         resource_type: 'auto'
//                 }
//                 const options = { folderVolunteer };
//                 const { public_id, secure_url } = await cloudinary.uploader.upload(file.toString(), options);
//                 return public_id
//         }
//         async deleteImage(publicId:string):Promise<void> {
//                 await cloudinary.uploader.destroy(publicId);
//         }
// }
// export { CloudinaryServiceImg }
// class CloudinaryServicePdf {
//         async uploadPdf(file:Buffer, folder:string): Promise<string> {
//                 const options = { folder };
//                 // const { public_id, secure_url } = await cloudinary.uploader.upload(
//                 //         file.toString(),
//                 //         { ...options },
//                 //         function (err?: any, callResult?: any) {}
//                 //         )
//                 const optionsPdf = { ...options, resource_type: 'raw' };
//                 const { public_id, secure_url } = await cloudinary.uploader.upload(
//                         file.toString(),
//                         optionsPdf.resource_type(),
//                         function (err?: any, callResult?: any) {}
//                         );
//                 return public_id
//         }
//         async deletePdf(publicId:string):Promise<void> {
//                 await cloudinary.uploader.destroy(publicId);
//         }
// }
// export { CloudinaryServicePdf }
// export async function uploadImage(file: any): Promise<any> {
//     try {
//         const result = await cloudinary.uploader.upload(file.tempFilePath, {
//             folder: 'volunteers'
//         });
//         // const img = new UserModel({
//             avatar: {
//                 secure_url: result.secure_url,
//                 public_id: result.public_id
//             }
//         });
//         await img.save();
//         return result;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// }
// export const deleteImage = async (publicId: string) => {
//     return await cloudinary.uploader.destroy(publicId)
// }
