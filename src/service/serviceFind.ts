import UserModel from "../database/models/user.model";

export const findAll = async () => {
  try {
    const users = await UserModel.find();
    return users

  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const user = await UserModel.findOne({ _id: id });
    if (!user) return false

    return user;
  } catch (err: any) {
    throw new Error(err);
  }
};