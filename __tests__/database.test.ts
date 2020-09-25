import { connectToDatabase, closeDatabase } from 'utilities/database';

describe('Database connection', () => {
  it('should connect -- when the correct credentials are provided', async done => {
    connectToDatabase().then(() => {
      done();
    });
  });

  it('should disconnect -- when called after connection successful', async done => {
    closeDatabase().then(() => done());
  });
});
