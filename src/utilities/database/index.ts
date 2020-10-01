import { connect, connection, disconnect } from 'mongoose';

export const connectToDatabase = async () => {
  connection
    .on('error', error => console.log('Database connection error\n', error))
    .once('open', () => console.log('Connected to database.\n'));

  return connect(process.env.DATABASE_URL!, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).catch(error => console.log('Database connection failure.\n', error));
};

export const closeDatabase = async () =>
  disconnect()
    .catch(error => console.log('Database disconnection error.\n', error))
    .then(() => console.log('Database connection closed.'));
