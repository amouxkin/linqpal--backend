import { Router } from 'express';
import auth from 'server/routes/auth';
import users from 'server/routes/users';

const router = Router().use('/auth', auth).use('/users', users);

export default router;
