import app from '../app';
import { closeDatabase, connectToDatabase } from 'utilities/database';

beforeAll(async () => await connectToDatabase());
afterAll(async () => await closeDatabase());

describe('Login', () => {
  it('should send error -- when -- the credentials are wrong', async done => {
    app
      .post('/auth/login')
      .then(response => {
        expect(response.status).toBe(401);
        done();
      })
      .catch(error => {
        console.log(error);
      });
  }, 30_000);

  it('should send token -- when -- the credentials are correct', function () {});
});
