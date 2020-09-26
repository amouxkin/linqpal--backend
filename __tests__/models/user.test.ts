import { User, UserModel } from 'models/schemas/user';

import { connectToDatabase, closeDatabase } from 'utilities/database';

beforeAll(async () => await connectToDatabase());
afterAll(async () => await closeDatabase());

describe('Create a new User', () => {
  it('should fail -- when -- All the required values are not provided', async done => {
    const user = new UserModel(<User>{
      name: {
        firstName: 'Test',
        lastName: 'User'
      },
      address: {
        city: '',
        lineOne: '',
        postalCode: '',
        country: '',
        state: ''
      },
      socialSecurityNumber: '',
      telephoneNumber: ' '
    });

    user.save().then(() => {
      UserModel.deleteOne(user);
      done();
    });
  });
});
