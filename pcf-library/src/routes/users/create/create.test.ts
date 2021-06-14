import { expect } from 'chai';
import 'mocha';
import create from './create';
import Users from '../users.model';
import { UserRole } from '../../../lib/types';

describe('Users :: Create', async () => {
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

  it('Can create a user', async () => {
    const candidate = {
      username: 'test',
      password: 'test',
      role: UserRole.standard,
    };

    const result = await create(candidate);
    if (result === null) {
      throw new Error(`User is null`);
    }

    expect(result).to.have.property('_id');
    expect(result).to.have.property('username', candidate.username, 'Username mismatch');
    expect(result).to.have.property('role', candidate.role.valueOf(), 'Role mismatch');
    expect(result.password).to.not.eql(candidate.password);
  });

  it('Fails if the user already exists', async () => {
    const candidate = {
      username: 'super',
      password: 'super',
      role: UserRole.standard,
    };
    const errMsg = `Failed to create user: User ${candidate.username} already exists`;

    await expect(create(candidate)).to.be.rejectedWith(errMsg);
  });
});
