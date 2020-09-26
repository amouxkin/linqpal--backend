import auth from 'server/routes/auth';
import { Router } from 'express';

const routes = <Array<Router>>[auth];

const router = routes.reduce(
  (accumulator, router) => accumulator.use(router),
  Router()
);

export default router;
