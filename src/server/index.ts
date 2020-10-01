import express, { json } from 'express';
import cors from 'cors';
import router from 'server/routes';

const app = express().use(cors()).use(json()).use(router);

export default app;
