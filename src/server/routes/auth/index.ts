import { Router } from 'express';
import login from './login';

export default Router().post('/auth/login', login).post('/auth/register');
