import express, { json, Router } from 'express';
import routes from 'server/routes';

const app = express()
  .use(json())
  .use(
    routes.reduce((accumulator, router) => accumulator.use(router)),
    Router()
  );

export default app;
