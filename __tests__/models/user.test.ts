import { User, UserModel } from 'models/schemas/user';
import { connectToDatabase, closeDatabase } from 'utilities/database';

beforeAll(async () => await connectToDatabase());
afterAll(async () => await closeDatabase());

describe('Create a new User', () => {
  it('should fail -- when -- All the required values are not provided', async done => {
    const user = new UserModel({
      name: {
        firstName: 'Test',
        lastName: 'User'
      },
      socialSecurityNumber: '',
      telephoneNumber: ' '
    });

    user.save().catch(() => done());
  });

  it('should create a new user -- when -- All the required values are not provided', async done => {
    const user = new UserModel(<User>{
      name: {
        firstName: 'Test',
        lastName: 'User'
      },
      address: {
        street: '2134 street',
        postalCode: '134',
        country: 'Country',
        state: 'State',
        city: 'City'
      },
      socialSecurityNumber: '2344114',
      telephoneNumber: '123-222-1243'
    });

    user.save().then(() => {
      UserModel.deleteOne(user);
      done();
    });
  });
});
