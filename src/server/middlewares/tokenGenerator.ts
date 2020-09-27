import { RequestHandler } from 'express';

const tokenGenerator: RequestHandler = (request, response) => {
  console.log(request.body);
  console.log(response.status);
  response.send();
};

export default tokenGenerator;
