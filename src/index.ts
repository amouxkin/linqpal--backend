import app from 'server';
import { createServer } from 'http';
import { closeDatabase, connectToDatabase } from 'utilities/database';

const server = createServer(app);

connectToDatabase().then(() => {
  server
    .listen(process.env.PORT!)
    .on('listening', () =>
      console.log('Server is running on. 🚀', server.address())
    )
    .on('close', async () => {
      console.log('Server has shut down.');
      await closeDatabase();
    });
});
