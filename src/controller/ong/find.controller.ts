import { Request, Response } from "express";
import { findById, findAll } from "../../service/ong/service.find";

//find all users in DB
export const getOngs = async (req: Request, res: Response) => {
    try {
      const ongs = await findAll();
  
      return res.send(ongs);
    } catch (err: any) {
      return res.status(409).send(err);
    }
};
  
//find one user by ID
export const getOngById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const ong = await findById(id);
  
      return res.status(200).send(ong);
    } catch (err: any) {
      return res.status(404).send("User not found");
    }
};