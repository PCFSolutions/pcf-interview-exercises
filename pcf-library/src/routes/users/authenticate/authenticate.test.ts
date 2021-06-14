import { expect } from 'chai';
import 'mocha';
import authenticate from './authenticate';
import Users from '../users.model';

describe('Users :: Authenticate', async () => {
  beforeEach(async () => {
    const u = {
      removed: false,
      system: false,
      username: 'super',
      password: 'super',
      role: 'Super',
    };
    await Users.create(u);
  });

  it('Authenticate succeeds', async () => {
    // TODO: Write a suitable test
    throw new Error('Not implemented');
  });

  it('Fails if the user doesnt exist', async () => {
    // TODO: Write a suitable test
    throw new Error('Not implemented');
  });

  it('Fails if the password is wrong', async () => {
    const errMsg = `Error: Invalid password`;

    await expect(authenticate({ username: 'super', password: 'ppp' })).to.be.rejectedWith(errMsg);
  });
});
