import { Request, Response } from "express";
import { validatePassword } from "../service/serviceCreate";
import { generateRefreshToken, generateToken } from "../utils/jwt.handle";

//login controller
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  
    const userValidation = { email, password };
  
    const validate = await validatePassword(userValidation);
  
    if (!validate) {
      return res.status(401).send("Wrong email or password");
    }
  
    //data para encriptar
    const encrypt = {
      _id: validate.id,
    };

    const { _id } = encrypt;
    const userId = _id
  
    //sign payload
    const tokenUser = generateToken(userId);
    generateRefreshToken(encrypt, res)
  
    //generar refresh token
  
    return res.status(201).send({ message: "User succesffully auth", tokenUser });
  } catch (err: any) {
    return res.status(409).send(err);
  }
};