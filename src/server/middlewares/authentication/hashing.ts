import { hashSync } from 'bcrypt';

export const createHashedPassword = (password: string): string =>
  hashSync(password, parseInt(process.env.SALT_ROUNDS!));
