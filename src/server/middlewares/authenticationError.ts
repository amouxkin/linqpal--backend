import { RequestHandler } from 'express';

const authenticationErrorHandler: RequestHandler = (
  request,
  response,
  next
) => {
  if (!response.locals.error) next();
  response.send('token');
};

export default authenticationErrorHandler;
