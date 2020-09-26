import { Schema, Document, model } from 'mongoose';
import { RequiredString } from 'models/scehemaTypes';

const UserSchema = new Schema({
  name: {
    firstName: RequiredString,
    lastName: RequiredString
  },
  telephoneNumber: {
    type: String
    // required: [true, 'Telephone number is required.'],
    // validate: /\d{3}-\d{3}-\d{4}/
  },
  address: {
    lineOne: String,
    lineTwo: String,
    city: String,
    State: String,
    postalCode: String
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
    state: string;
    country: string;
    postalCode: string;
  };
  socialSecurityNumber: string;
}

export const UserModel = model<User & Document>('User', UserSchema);
