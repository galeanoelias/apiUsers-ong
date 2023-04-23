import { Request, Response } from "express";
import { loginOng } from "../../service/ong/service.create";

//login controller
export const loginOngs = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
  
    const ongValidation = await loginOng({ email, password });
  
    const validate = ongValidation;
  
    if (!validate) {
      return res.status(401).send("Wrong email or password");
    }
  
    return res.status(201).send({ message: "User succesffully auth", ongValidation });
  } catch (err: any) {
    return res.status(409).send(err);
  }
};