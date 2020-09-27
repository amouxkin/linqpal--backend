import { RequestHandler } from 'express';
import { User, UserModel } from 'models/user';
import { Error } from 'mongoose';

const register: RequestHandler = async (request, response, next) => {
  const newUser = new UserModel(<User>{ ...request.body, role: 'user' });
  newUser
    .save()
    .then(user => response.send(user))
    .catch(error => {
      switch (error.constructor) {
        case Error.ValidationError:
          response.status(401);
          break;
        default:
          response.status(400);
      }

      response.send(error.message ?? error);
    })
    .finally(next);
};

export default register;
