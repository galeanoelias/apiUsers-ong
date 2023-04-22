import OngModel from "../../database/models/ong.models";

export const findAll = async () => {
  try {
    const ongs = await OngModel.find();
    return ongs

  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const ong = await OngModel.findOne({ _id: id });
    if (!ong) return false

    return ong;
  } catch (err: any) {
    throw new Error(err);
  }
};