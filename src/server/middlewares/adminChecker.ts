import { RequestHandler } from 'express';
import { UserModel } from 'models/user';

const adminChecker: RequestHandler = async (request, response, next) => {
  const user = await UserModel.findOne({ _id: response.locals.user._id });
  if (user?.isAdmin) return next();
  response.sendStatus(401);
};

export default adminChecker;
