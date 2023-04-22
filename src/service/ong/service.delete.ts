import OngModel from "../../database/models/ong.models";


// Service of Delete
export const deleteOng = async (id: string, input: {}) => {
    try {
      const ong = await OngModel.findById({ _id: id }, input, { new: true });
      await ong?.deleteOne();
    } catch (err: any) {
      throw new Error(err);
    }
  };