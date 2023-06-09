import OngModel from "../../database/models/ong.models";
import { Iong } from "../../interfaces/ong";
import { Auth } from "../../interfaces/auth";
import { hashPassword, comparePassword } from "../../utils/bcrypt.handle";
import { generateToken } from "../../utils/jwt.handle";

//funcion para crear un usuario en la bbdd
export const createOng = async (input: Iong) => {
  try {
    const ong = await OngModel.create(input);

    return ong;
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
  const ong = await OngModel.findOne({ email: email });

  if (!ong) return false;

  const validateOng = await hashPassword(password);
  //comparo pwd
  const validate = await comparePassword(validateOng, ong.password);

  if (!validate) return false;

  return ong;
};

export const loginOng = async ({ email, password }: Auth) => {
  const checkIs = await OngModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_ONG";

  const passwordHass = checkIs.password;
  const isCorrect = await comparePassword(password, passwordHass);

  if (!isCorrect) return "PASSWORD_INCORRECT"

  const token = generateToken(checkIs.id);
  return token
}