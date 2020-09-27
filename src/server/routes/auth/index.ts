import { Router } from 'express';
import login from './login';
import register from './register';

export default Router()
  .post('/auth/login', login)
  .post('/auth/register', register);
