import express, { json } from 'express';
import routes from 'server/routes';

const app = express().use(json()).use(routes);

export default app;
