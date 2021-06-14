import mongoose, { ConnectionOptions } from 'mongoose';
import { MongoMemoryReplSet } from 'mongodb-memory-server';

const connect = async (opts = {}): Promise<void> => {
  try {
    const replSet = new MongoMemoryReplSet({
      replSet: {
        name: 'local-rs',
        storageEngine: 'wiredTiger',
      },
    });
    await replSet.waitUntilRunning();
    const dbUrl = await replSet.getUri();

    const connectionOptions: ConnectionOptions = {
      ...opts,
      reconnectTries: 100,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(dbUrl, connectionOptions);

    mongoose.connection.on('error', err => {
      throw new Error(`Database connection error: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
      throw new Error(`Database connection disconnected`);
    });
  } catch (err) {
    throw new Error(`Could not connect to database - ${err.message}`);
  }
};

export default { connect };
