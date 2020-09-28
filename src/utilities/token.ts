import { sign, verify } from 'jsonwebtoken';
import { User } from 'models/user';

export const tokenize = (user: User) =>
  sign(user.toJSON(), process.env.JWT_TOKEN_SECRET!, {
    expiresIn: process.env.JWT_DURATION
  });

export const verifyToken = (token: string) =>
  <User>verify(token, process.env.JWT_TOKEN_SECRET!);
