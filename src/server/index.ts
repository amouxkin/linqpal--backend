import express, { json, Router } from 'express';

const app = express().use(json());

app.get('/', (request, response) => {
  response.send('Hello World!');
});

export default app;
