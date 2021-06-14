import Users from '../routes/users/users.model';
import { UserRole } from './types';

// Initialize the database with base content
const seedDb = async (): Promise<void> => {
  const existingUsers = await Users.find({});

  if (!existingUsers.length) {
    console.log(`Seeding default user`);
    await Users.create([
      {
        username: 'super',
        password: 'super',
        role: UserRole.super,
      },
    ]);
    console.log(`Default user created`);
  }
};

export default seedDb;
