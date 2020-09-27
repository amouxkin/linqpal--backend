import { Router } from 'express';
import auth from './auth';

const routes = <Array<Router>>[auth];

const router = routes.reduce(
  (accumulator, router) => accumulator.use(router),
  Router()
);

export default router;
