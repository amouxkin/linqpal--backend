import {
  checkHashedPassword,
  createHashedPassword
} from 'server/middlewares/authentication/hashing';

describe('Hashing', () => {
  it('should not be equal -- (even) when input is the same', () => {
    expect(createHashedPassword('Hello World')).not.toBe(
      createHashedPassword('Hello World')
    );
  });

  it('should be comparable -- when password is correct', () => {
    const hashedPassword = createHashedPassword('hello world');
    expect(checkHashedPassword('hello world', hashedPassword)).toBe(true);
  });
});
