import { RequestHandler } from 'express';
import { UserModel } from 'models/user';

const login: RequestHandler = async (request, response, next) => {
  const { email, password } = request.body;

  UserModel.findOne({ email })
    .then(user => {
      if (user instanceof UserModel && user.checkPassword(password)) {
        response.locals.user = user;
      } else {
        throw new Error('Credentials do not match.');
      }
    })
    .catch(error => (response.locals.error = error))
    .finally(next);
};

export default login;
