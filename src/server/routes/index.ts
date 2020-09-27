import { Router } from 'express';
import auth from 'server/routes/auth';

const router = Router().use('/auth', auth);

export default router;
