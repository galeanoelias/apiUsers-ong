import UserModel from "../database/models/user.model";
import { User } from "../interfaces/user";
import { hashPassword, comparePassword } from "../utils/bcrypt.handle";


//test
//import { UserRepo } from "../repository/UserRepository";

//funcion para crear un usuario en la bbdd
export const createUser = async (input: User) => {
  try {
    const user = await UserModel.create(input);

    return user;
  } catch (err: any) {
    throw new Error(err);
  }
};

//funcion que valida pwd. recibe como parametros email y pwd ingresados en request. defino los tipos
//el servicio se consume desde el controlador para la ruta /login
export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  //busco user por email
  const user = await UserModel.findOne({ email: email });

  if (!user) return false;

  const validateUser = await hashPassword(password);
  //comparo pwd
  const validate = await comparePassword(validateUser, user.password);

  if (!validate) return false;

  return user;
};