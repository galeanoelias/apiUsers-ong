import { Request, Response } from "express";
import { User } from "../../interfaces/user";
import { createUser } from "../../service/user/serviceCreate";
import { generateToken, generateRefreshToken } from "../../utils/jwt.handle";

//register controller
export const registerUser = async (req: Request, res: Response) => {
  try {
    let { username, email, password } = req.body;

    let newUser: User = {
      username,
      email,
      password
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