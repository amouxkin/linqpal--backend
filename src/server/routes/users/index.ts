import { Router } from 'express';
import users from 'server/routes/users/users';
import tokenChecker from 'server/middlewares/tokenChecker';
import adminChecker from 'server/middlewares/adminChecker';

export default Router().get('/', tokenChecker, adminChecker, users);
