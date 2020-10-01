import { RequestHandler } from 'express';
import { User } from 'models/user';
import { tokenize } from 'utilities/token';

const tokenGenerator: RequestHandler = (request, response) => {
  const user: User = response.locals.user;

  response.status(200).send({
    name: user.name,
    id: user._id.toString(),
    isAdmin: user.isAdmin,
    token: tokenize(user)
  });
};

export default tokenGenerator;
