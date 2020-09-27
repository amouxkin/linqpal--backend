import app from '../app';
import { closeDatabase, connectToDatabase } from 'utilities/database';

beforeAll(async () => await connectToDatabase());
afterAll(async () => await closeDatabase());

describe('Register', () => {
  it('should not create a new user -- when -- all required filed are not provided', async done => {
    app.post('/auth/register').then(response => {
      expect(response.status).not.toBe(200);
      done();
    });
  });
});

describe('Login', () => {
  it('should send error -- when -- the credentials are wrong', async done => {
    app.post('/auth/login').then(response => {
      expect(response.status).toBe(401);
      done();
    });
  });

  it('should send token -- when -- the credentials are correct', function () {});
});
