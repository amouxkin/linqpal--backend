import { RequestHandler } from 'express';
import { Error } from 'mongoose';

const authenticationErrorHandler: RequestHandler = (
  request,
  response,
  next
) => {
  const error = response.locals.error;

  if (!error) return next();

  switch (error.constructor) {
    case Error:
      response.status(401).send();
      break;
    default:
      if (error?.code === 11000) {
        return response
          .status(409)
          .send(` ${Object.keys(error.keyValue).join(', ')} already exits.`);
      }
      response.status(400).send(error.message ?? error);
  }
};

export default authenticationErrorHandler;
