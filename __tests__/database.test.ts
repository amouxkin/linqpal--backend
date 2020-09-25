import { connectToDatabase } from 'utilities/database';

describe('Database connection', () => {
  it('should connect -- when the correct credentials are provided', async done => {
    connectToDatabase.then(respose => {
      done();
    });
  });
});
