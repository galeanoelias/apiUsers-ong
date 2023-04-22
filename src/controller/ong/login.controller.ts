import { Request, Response } from "express";
import { validatePassword } from "../../service/ong/service.create";
import { generateRefreshToken, generateToken } from "../../utils/jwt.handle";

//login controller
export const loginOng = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  
    const ongValidation = { email, password };
  
    const validate = await validatePassword(ongValidation);
  
    if (!validate) {
      return res.status(401).send("Wrong email or password");
    }
  
    //data para encriptar
    const encrypt = {
      _id: validate.id,
    };

    const { _id } = encrypt;
    const ongId = _id
  
    //sign payload
    const tokenOng = generateToken(ongId);
    generateRefreshToken(encrypt, res)
  
    //generar refresh token
  
    return res.status(201).send({ message: "User succesffully auth", tokenOng });
  } catch (err: any) {
    return res.status(409).send(err);
  }
};