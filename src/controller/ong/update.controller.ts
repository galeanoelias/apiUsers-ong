import { Response } from "express";
import { updateOng } from "../../service/ong/service.update";
import { findById } from "../../service/ong/service.find";
import { hashPassword } from "../../utils/bcrypt.handle";
import { generateToken } from "../../utils/jwt.handle";

// update user by ID
export const updateOngById = async (req: any, res: Response) => {
    const { id } = req.params;
    const ong = await findById(id);
    if (!ong) {
      return res.status(404).send("Ong not found");
    }
  
    const { email, username, password, photo, website, telephone, about_me, ong_types } = req.body;
  
    const hash = await hashPassword(password);
    const hashUsername = await hashPassword(ong.password);
  
    const newOng = {
      email: email ? email : ong.email,
      username: username ? username : ong.username,
      password: password ? hash : hashUsername,
      photo: photo ? photo : 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
      website: website ? website : ong.website,
      telephone: telephone ? telephone : ong.telephone,
      about_me: about_me ? about_me : ong.about_me,
      ong_types: ong_types ? ong_types : ong.ong_types
    };
    try {
      let ong = await updateOng(id, newOng);
      const tokenOng = generateToken(req.id);

      return res.status(201).json({ tokenOng, ong })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error of server! "})
    }
  };