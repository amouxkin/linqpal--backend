import { RequestHandler } from 'express';
import { verifyToken } from 'utilities/token';

const tokenChecker: RequestHandler = (request, response, next) => {
  const header = request.headers['authorization'];
  const token = header && header.split(' ')[1];

  if (token) {
    try {
      response.locals.user = verifyToken(token);
      return next();
    } catch (error) {}
  }
  return response.sendStatus(401);
};

export default tokenChecker;