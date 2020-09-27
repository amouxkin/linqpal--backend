import { Schema, Document, model } from 'mongoose';
import { RequiredString } from 'models/scehemaTypes';
import { checkHashedPassword, createHashedPassword } from 'utilities/hashing';
import { encrypt } from 'utilities/encryption';

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
  hashedPassword: {
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
  hashedPassword: string;
  email: string;
  isAdmin: boolean;
  checkPassword(password: string): boolean;
}

UserSchema.pre<User>('save', async function preSave(next) {
  if (this.isModified('password')) {
    this.hashedPassword = createHashedPassword(this.hashedPassword);
  }

  if (this.isModified('socialSecurityNumber')) {
    this.socialSecurityNumber = JSON.stringify(
      encrypt(this.socialSecurityNumber)
    );
  }

  return next();
});

UserSchema.virtual('isAdmin').get(function (this: User) {
  return this.role === 'admin';
});

UserSchema.methods.checkPassword = function (this: User, password: string) {
  return checkHashedPassword(password, this.hashedPassword);
};

export const UserModel = model<User>('User', UserSchema);
