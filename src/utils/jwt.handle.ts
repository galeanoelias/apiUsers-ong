import jwt from "jsonwebtoken";
import { jwt_token, jwt_refresh } from "./constants";
export const generateToken = (_id: string) => {
  const expiresIn = 60 * 15;
  try {
    const token = jwt.sign({ _id }, jwt_token, { expiresIn });
    return { token, expiresIn };
  } catch (error) {
    console.log(error)
  }
};

export const validateToken = async (token: string) => {
  const validate = jwt.verify(token, jwt_token);
  return validate;
};

export const generateRefreshToken = (payload:{_id:string}, res: { cookie: (arg0: string, arg1: string, arg2: { httpOnly: boolean; secure: boolean; expires: Date; sameSite: string; }) => void; }) => {
  const expiresIn = 60 * 60 * 24 * 30;
  try {
    const refreshToken = jwt.sign({ payload }, jwt_refresh, {
        expiresIn,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: !(process.env.MODO === "developer"),
        expires: new Date(Date.now() + expiresIn * 1000),
        sameSite: "none"
    });
  } catch (error) {
    console.log(error)
  }
};

export const tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es valida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token no vàlido",
    "No Bearer": "Utiliza formato Bearer",
    "jwt malformed": "JWT formato no valido",
};