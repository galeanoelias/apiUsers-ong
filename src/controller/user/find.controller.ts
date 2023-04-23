import { Request, Response } from "express";
import { findById, findAll } from "../../service/user/serviceFind";

//find all users in DB
export const getUsers = async (req: Request, res: Response) => {
    try {
      const users = await findAll();
  
      return res.send(users);
    } catch (err: any) {
      return res.status(409).send(err);
    }
};
  
//find one user by ID
export const getUserById = async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const user = await findById(id);
  
      return res.status(200).json({user});
    } catch (err: any) {
      return res.status(404).send("User not found");
    }
};