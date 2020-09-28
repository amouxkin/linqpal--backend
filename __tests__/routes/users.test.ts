import { closeDatabase, connectToDatabase } from 'utilities/database';
import { deleteUserOne, testApp, userOne } from '../appHelper';
import { User, UserModel } from 'models/user';
import { tokenize } from 'utilities/token';

beforeAll(async () => {
  await connectToDatabase();
  await deleteUserOne();
});

afterEach(async () => {
  await deleteUserOne();
  await closeDatabase();
});

describe('Users', () => {
  it('should not be allowed access -- when -- user is a regular user.', async done => {
    const user = await new UserModel(userOne).save();
    const token = tokenize(user);

    testApp
      .get('/users')
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.status).not.toBe(200);
        done();
      });
  }, 20_000);

  it('should be allowed access -- when -- user is a admin user.', async done => {
    const user = await new UserModel(<User>{
      ...userOne,
      role: 'admin'
    }).save();
    const token = tokenize(user);

    testApp
      .get('/users')
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
        expect(response.status).toBe(200);
        done();
      });
  }, 20_000);
});
