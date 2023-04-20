import UserModel from "../database/models/user.model";


// Service of Delete
export const deleteUser = async (id: string, input: {}) => {
    try {
      const user = await UserModel.findById({ _id: id }, input, { new: true });
      await user?.deleteOne();
    } catch (err: any) {
      throw new Error(err);
    }
  };