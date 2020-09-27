import { hashSync, compareSync } from 'bcrypt';

export const createHashedPassword = (password: string): string =>
  hashSync(password, parseInt(process.env.SALT_ROUNDS!));

export const checkHashedPassword = (
  password: string,
  hashedPassword: string
): boolean => {
  return compareSync(password, hashedPassword);
};
