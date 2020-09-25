import app from 'server';
import { createServer } from 'http';

const server = createServer(app);

server
  .listen(process.env.PORT!)
  .on('listening', () =>
    console.log('Server is running on. 🚀', server.address())
  )
  .on('close', () => console.log('Server has shut down.'));
