// import { Request, Response } from "express";
// import { uploadImage } from "../service/cloudinary.service";

// export const uploadImg = async (req: Request, res: Response) => {
//     try {
//         const { data } = req.body;
//         const result = await uploadImage(data);
//         res.json({ public_id: result.public_id, url: result.secure_url });
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ message: 'Error al subir la imagen' })
//     }
// };