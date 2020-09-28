import supertest from 'supertest';
import app from 'server';
import { User, UserModel } from 'models/user';

export const testApp = supertest(app);

export const userOne: Partial<User> = {
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
};

export const deleteUserOne = async () =>
  UserModel.findOneAndDelete({ email: userOne.email }).catch(error => {});
