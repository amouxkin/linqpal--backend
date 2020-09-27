import { decrypt, encrypt } from 'utilities/encryption';

describe('Encryption', () => {
  const data = 'hello world';
  const encrypted = encrypt(data);

  it('should create an encrypted string -- when -- string is provided', () => {
    expect(encrypted).not.toBe(data);
  });

  it('should decrypt an encrypted string -- when -- valid encrypted string is provided', () => {
    const decrypted = decrypt(encrypted);
    expect(decrypted).toBe(data);
  });
});
