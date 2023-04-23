import { Request, Response } from "express";
import { loginUser } from "../../service/user/serviceCreate";

//login controller
export const loginUsers = async ({ body }: Request, res: Response) => {
  try {
    let { email, password } = body;
    
    const userValidation = await loginUser({ email, password });
  
    const validate = userValidation
  
    if (!validate) {
      return res.status(401).send("Wrong email or password");
    }
  
    return res.status(201).send({ message: "User succesffully auth", userValidation});
  } catch (err: any) {
    return res.status(409).send(err);
  }
};