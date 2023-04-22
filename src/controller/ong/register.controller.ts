import { Request, Response } from "express";
import { Iong } from "../../interfaces/ong";
import { createOng } from "../../service/ong/service.create";
import { generateToken, generateRefreshToken } from "../../utils/jwt.handle";

//register controller
export const registerOng = async (req: Request, res: Response) => {
  try {
    let { username, email, password } = req.body;

    let newOng: Iong = {
      username,
      email,
      password
    }

    const ong = await createOng(newOng);

    const tokenOng = generateToken(ong.id);
    generateRefreshToken(ong.id, res)

    console.log(ong);


    return res.status(201).send({ message: "User registered successfully", tokenOng });
  } catch (err: any) {
    return res.status(409).send("Error at register " + err);
  }
};