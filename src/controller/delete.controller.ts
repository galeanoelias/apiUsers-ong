import { Request, Response } from "express";
import { deleteUser } from "../service/serviceDelete";

// User Delete of the BBDD
export const removeUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { email, password, username } = req.body;
  
      if (!email || !password || !username)
        return res.status(404).send("No existe el link");
  
      const userDelete = { email, password, username };
      const userRemove = await deleteUser(id, userDelete);
  
      return res.status(200).send(`El usuario ${userRemove} fue eliminado`);
    } catch (error: any) {
      if (error.kind === "ObjectId") {
        return res.status(403).send("Fomrato User ID not found");
      }
      return res.status(500).send("Error del servidor");
    }
  };