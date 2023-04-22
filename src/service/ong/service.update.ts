import OngModel from "../../database/models/ong.models";
import { Iong } from "../../interfaces/ong";

// Update User
export const updateOng = async (
    id: string,
    input: Iong
  ) => {
    try {
      const ong = await OngModel.findByIdAndUpdate({ _id: id }, input, {
        new: true,
      });
      return ong;
    } catch (err: any) {
      throw new Error(err);
    }
  };