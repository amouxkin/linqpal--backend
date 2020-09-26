import { Schema, Document, model } from 'mongoose';
import { RequiredString } from 'models/scehemaTypes';

const UserSchema = new Schema({
  name: {
    firstName: RequiredString,
    lastName: RequiredString
  },
  telephoneNumber: {
    ...RequiredString,
    validate: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
  },
  address: {
    street: RequiredString,
    city: RequiredString,
    postalCode: RequiredString,
    state: RequiredString,
    country: RequiredString
  },
  socialSecurityNumber: {
    ...RequiredString,
    unique: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  }
});

export interface User {
  name: {
    firstName: string;
    lastName: string;
  };
  telephoneNumber: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
  };
  socialSecurityNumber: string;
  role: string;
  isAdmin: boolean; // virtual
}

UserSchema.virtual('isAdmin').get(function (this: User) {
  return this.role === 'admin';
});

export const UserModel = model<User & Document>('User', UserSchema);
