import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { before, after, afterEach, beforeEach } from 'mocha';
import Users from '../routes/users/users.model';
import Locations, { LocationLean } from '../routes/locations/location.model';
import db from './db';

chai.use(chaiAsPromised);

before(async () => db.connect());
after(async () => db.close());

afterEach(async () => {
  await Users.deleteMany({});
  await Locations.deleteMany({});
});

beforeEach(async () => {
  const l: LocationLean = {
    name: 'Default Location',
    removed: false,
  };
  await Locations.create(l);
  const loc = await Locations.findOne({ name: 'Default Location' });

  if (!loc) {
    throw new Error(`Failed to create location`);
  }
});
