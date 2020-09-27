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
      response.status(400).send(error.message ?? error);
  }
};

export default authenticationErrorHandler;
