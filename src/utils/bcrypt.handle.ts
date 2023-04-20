import { hash, compare } from "bcrypt";

export const hashPassword = async (password: string) => {
  const passwordHash = await hash(password, 10);

  return passwordHash;
};

export const comparePassword = async (password: string,userPassword: string) => {
  const isCorrect = await compare(password, userPassword);

  return isCorrect
};