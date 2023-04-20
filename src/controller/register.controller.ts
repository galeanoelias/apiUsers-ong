import { Request, Response } from "express";
import { User } from "../interfaces/user";
import { createUser } from "../service/serviceCreate";
import { generateToken, generateRefreshToken } from "../utils/jwt.handle";
import cloudinaryService from "../service/cloudinary.service";
import fs from "fs-extra";

//register controller
export const registerUser = async (req: Request, res: Response) => {
  try {
    let { username, firstname, lastname, email, password } = req.body;

    let newUser: User = {
      username,
      firstname,
      lastname,
      email,
      password,
    }

    // if (req.files?.avatar) {
    //   try {
    //     const result = await uploadImage(req.body.files.avatar)
    //     avatar = {
    //       public_id: <string>avatar.public_id,
    //       secure_url: <string>avatar.secure_url
    //     }
    //     await fs.unlink(req.body.files.avatar);
    //     return result;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // console.log(avatar)

    if (req.body.avatar?.avatar) {
      try {
        let avatarPath = req.body.Buffer;
        let avatarUrl = await cloudinaryService.uploadImage(avatarPath);
        res.send({ succes: true, avatarUrl })
        console.log(avatarUrl);
      } catch (error) {
        res.status(500).send({ succes: false, error });
      }
    }

    const user = await createUser(newUser);

    const tokenUser = generateToken(user.id);
    generateRefreshToken(user.id, res)

    console.log(user);


    return res.status(201).send({ message: "User registered successfully", tokenUser });
  } catch (err: any) {
    return res.status(409).send("Error at register " + err);
  }
};