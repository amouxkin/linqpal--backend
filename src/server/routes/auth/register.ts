import { RequestHandler } from 'express';
import { User, UserModel } from 'models/user';

const register: RequestHandler = async (request, response, next) => {
  const newUser = new UserModel(<User>{ ...request.body, role: 'user' });

  newUser
    .save()
    .then(user => (response.locals.user = user))
    .catch(error => (response.locals.error = error))
    .finally(next);
};

export default register;
