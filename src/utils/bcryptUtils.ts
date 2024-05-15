import { genSalt, hash, compare } from "bcrypt";

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  const salt = await genSalt(saltRounds);
  return hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => compare(password, hashedPassword);
