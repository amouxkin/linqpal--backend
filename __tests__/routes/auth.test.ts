import app from '../app';
import { closeDatabase, connectToDatabase } from 'utilities/database';
import { User } from 'models/user';

beforeAll(async () => await connectToDatabase());
afterAll(async () => await closeDatabase());

describe('Register', () => {
  // it('should not create a new user -- when -- all required filed are not provided', async done => {
  //   app.post('/auth/register').then(response => {
  //     expect(response.status).not.toBe(200);
  //     done();
  //   });
  // });

  it('should create a new user -- when -- all required filed are provided', async done => {
    app
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send(<User>{
        name: {
          lastName: 'Last',
          firstName: 'First'
        },
        password: 'password123',
        socialSecurityNumber: '333-22-4444',
        email: 'testerTwo@test.com',
        telephoneNumber: '333-333-4444',
        address: {
          city: 'City',
          street: 'Street',
          country: 'Country',
          state: 'State',
          postalCode: '123456'
        }
      })
      .then(response => {
        expect(response.status).toBe(200);
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
