import express, { json } from 'express';
import router from 'server/routes';

const app = express().use(json()).use(router);

export default app;
