import { Request, Response } from "express";
import { deleteOng } from "../../service/ong/service.delete";

// User Delete of the BBDD
export const removeOng = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { email, password, username } = req.body;
  
      if (!email || !password || !username)
        return res.status(404).send("No existe el link");
  
      const ongDelete = { email, password, username };
      const ongRemove = await deleteOng(id, ongDelete);
  
      return res.status(200).send(`El usuario ${ongRemove} fue eliminado`);
    } catch (error: any) {
      if (error.kind === "ObjectId") {
        return res.status(403).send("Fomrato User ID not found");
      }
      return res.status(500).send("Error del servidor");
    }
  };