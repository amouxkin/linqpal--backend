import { RequestHandler } from 'express';

const register: RequestHandler = async (request, response, next) => {
  response.send(400).send();
  next();
};

export default register;
