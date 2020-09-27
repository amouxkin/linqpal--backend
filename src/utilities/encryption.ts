import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

interface EncryptedData {
  initialiseVector: string;
  data: string;
}

const encoding = 'hex';

export const encrypt = (data: string): EncryptedData => {
  const initialiseVector = randomBytes(16);

  const cipher = createCipheriv(
    process.env.ENCRYPTION_ALGORITHM!,
    process.env.ENCRYPTION_KEY!,
    initialiseVector
  );

  return {
    initialiseVector: initialiseVector.toString(encoding),
    data: Buffer.concat([cipher.update(data), cipher.final()]).toString(
      encoding
    )
  };
};

export const decrypt = (encrypted: EncryptedData): string => {
  const decipher = createDecipheriv(
    process.env.ENCRYPTION_ALGORITHM!,
    process.env.ENCRYPTION_KEY!,
    Buffer.from(encrypted.initialiseVector, encoding)
  );

  return Buffer.concat([
    decipher.update(Buffer.from(encrypted.data, encoding)),
    decipher.final()
  ]).toString();
};
