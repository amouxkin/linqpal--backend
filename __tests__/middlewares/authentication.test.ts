import { createHashedPassword } from 'server/middlewares/authentication/hashing';

describe('Hashing', () => {
  it('should not be equal -- (even) when input is the same', () => {
    expect(createHashedPassword('Hello World')).not.toBe(
      createHashedPassword('Hello World')
    );
  });
});
