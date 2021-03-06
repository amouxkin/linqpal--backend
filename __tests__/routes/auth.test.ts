import { deleteUserOne, testApp, userOne } from '../appHelper';
import { closeDatabase, connectToDatabase } from 'utilities/database';
import { UserModel } from 'models/user';

beforeAll(async () => {
  await connectToDatabase();
  await deleteUserOne();
}, 20_000);

afterAll(async () => {
  await deleteUserOne();
  await closeDatabase();
}, 20_000);

describe('Register', () => {
  it('should not create a new user -- when -- all required filed are not provided', async done => {
    testApp.post('/auth/register').then(response => {
      expect(response.status).not.toBe(200);
      done();
    });
  });

  it('should create a new user -- when -- all required filed are provided', async done => {
    testApp
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send(userOne)
      .then(response => {
        expect(response.status).toBe(200);
        UserModel.deleteOne({ where: { email: 'testerTwo@test.com' } });
        done();
      });
  });
});

describe('Login', () => {
  it('should send error -- when -- the credentials are wrong', async done => {
    testApp.post('/auth/login').then(response => {
      expect(response.status).not.toBe(200);
      done();
    });
  });

  it('should send token -- when -- the credentials are correct', async done => {
    testApp
      .post('/auth/login')
      .set('Accept', 'application/json')
      .send({ email: userOne.email, password: userOne.password })
      .then(response => {
        expect(response.status).toBe(200);
        done();
      });
  });
});
