/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import mongoose, { ConnectionOptions } from 'mongoose';
import { MongoMemoryReplSet } from 'mongodb-memory-server';

const replSet = new MongoMemoryReplSet({
  replSet: {
    name: 'local-rs',
    storageEngine: 'wiredTiger',
  },
});

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const connect = async (opts = {}): Promise<void> => {
  try {
    await replSet.waitUntilRunning();
    const dbUrl = await replSet.getUri();

    const connectionOptions: ConnectionOptions = {
      ...opts,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };

    // connectionOptions.replicaSet = replicaSet;

    await mongoose.connect(dbUrl, connectionOptions);

    // This is kinda dumb, but it stops the tests from running before the db is ready
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    await wait(1000);
    console.log('Mongoose Connected');

    mongoose.connection.on('error', (err) => {
      throw new Error(`Database connection error: ${err.message}`);
    });
  } catch (err) {
    throw new Error(`Could not connect to database - ${err.message}`);
  }
};

/**
 * Drop database, close the connection and stop mongod.
 */
const close = async (): Promise<void> => {
  console.log('Dropping db...');
  // await mongoose.connection.dropDatabase();
  console.log('Closing db connection...');
  await mongoose.connection.close();

  console.log('Stopping replica set (this takes ages)...');
  await replSet.stop();
};

const clearDatabase = async (): Promise<void> => {
  const { collections } = mongoose.connection;

  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(collections)) {
    const collection = collections[key];
    // eslint-disable-next-line no-await-in-loop
    await collection.deleteMany({});
  }
};

export default { connect, close, clearDatabase };
