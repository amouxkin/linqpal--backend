import { RequestHandler } from 'express';
import { UserModel } from 'models/user';

const users: RequestHandler = async (request, response, next) => {
  const users = await UserModel.find({});
  response.send(users);
};

export default users;
