import UserModel from "../database/models/user.model";
import { User } from "../interfaces/user";

// Update User
export const updateUser = async (
    id: string,
    input: User
  ) => {
    try {
      const user = await UserModel.findByIdAndUpdate({ _id: id }, input, {
        new: true,
      });
      return user;
    } catch (err: any) {
      throw new Error(err);
    }
  };