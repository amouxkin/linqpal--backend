import { Router } from 'express';
import { UserModel } from 'models/user';

export default Router().post('/auth/login', async (request, response, next) => {
  const { email, password } = request.body;
  UserModel.findOne({
    where: { email, password }
  })
    .then(user => {
      if (user instanceof UserModel) {
        response.status(200).send();
      } else {
        return response.status(401).send('Check credentials');
      }
    })
    .catch(error => response.status(409).send(error));
});
