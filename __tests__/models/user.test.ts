import { User, UserModel } from 'models/user';
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

  it('should create a new user -- when -- All the required values are provided', async done => {
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
      socialSecurityNumber: '333-22-4444',
      telephoneNumber: '123-222-1243',
      email: 'tester01@gmail.com',
      hashedPassword: 'password1'
    });

    user.save().then(async () => {
      await UserModel.deleteOne(user);
      done();
    });
  });
});
