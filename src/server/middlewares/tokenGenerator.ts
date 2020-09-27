import { RequestHandler } from 'express';
import { User } from 'models/user';
import { sign } from 'jsonwebtoken';

const tokenGenerator: RequestHandler = (request, response) => {
  const user: User = response.locals.user;
  response.status(200).send({
    name: user.name,
    id: user._id.toString(),
    isAdmin: user.isAdmin,
    token: sign(user.toJSON(), process.env.JWT_TOKEN_SECRET!, {
      expiresIn: process.env.JWT_DURATION
    })
  });
};

export default tokenGenerator;
