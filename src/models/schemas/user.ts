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
    lineOne: RequiredString,
    lineTwo: String,
    city: RequiredString,
    postalCode: RequiredString,
    state: RequiredString,
    country: RequiredString
  },
  socialSecurityNumber: String
});

export interface User {
  name: {
    firstName: string;
    lastName: string;
  };
  telephoneNumber: string;
  address: {
    lineOne: string;
    lineTwo?: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
  };
  socialSecurityNumber: string;
}

export const UserModel = model<User & Document>('User', UserSchema);
