import { Schema, Document, model } from 'mongoose';
import { RequiredString } from 'models/scehemaTypes';
import { createHashedPassword } from 'utilities/hashing';

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
    unique: 'Social Security Number already exists.',
    validate: [
      /^\d{3}-\d{2}-\d{4}$/,
      'Please provide a correct Social Security Number.'
    ]
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  },
  email: {
    ...RequiredString,
    unique: 'Email already exits.',
    validate: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email.'
    ]
  },
  password: {
    ...RequiredString,
    validate: [
      /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,
      'Password must contain at least one letter, at least one number, and be longer than six characters.'
    ]
  }
});

export interface User extends Document {
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
  password: string;
  email: string;
  isAdmin: boolean; // virtual
}

UserSchema.virtual('isAdmin').get(function (this: User) {
  return this.role === 'admin';
});

UserSchema.pre<User>('save', async function preSave(next) {
  if (this.isModified('password')) {
    this.password = createHashedPassword(this.password);
  }

  if (this.isModified('socialSecurityNumber')) {
    // this.socialSecurityNumber =
  }

  return next();
});

export const UserModel = model<User>('User', UserSchema);
