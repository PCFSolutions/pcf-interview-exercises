import express, { Application } from 'express';
import routes from './routes';
import db from './lib/db';
import seedDb from './lib/seedDb';

const start = async (): Promise<void> => {
  try {
    const PORT = 3000;
    const app: Application = express();

    // Load API Routes
    app.use('/api', routes);

    // Initialize DB connection & seed if required
    await db.connect();
    await seedDb();

    // Start the express server
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
      console.log(`Env is ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

start();
