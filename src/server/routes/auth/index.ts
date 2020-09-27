import { Router } from 'express';
import login from 'server/routes/auth/login';
import register from 'server/routes/auth/register';
import tokenGenerator from 'server/middlewares/tokenGenerator';
import authenticationErrorHandler from 'server/middlewares/authenticationError';

export default Router()
  .post('/login', login, authenticationErrorHandler, tokenGenerator)
  .post('/register', register, authenticationErrorHandler, tokenGenerator);
