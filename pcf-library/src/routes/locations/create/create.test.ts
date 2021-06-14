/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from 'chai';
import 'mocha';
import create from './create';
import Locations from '../location.model';

describe('Locations :: Create', async () => {
  it('Returns a created document', async () => {
    const name = 'Test location';

    const res = await create({ name });

    expect(res).to.have.property('name', name, 'Missing required property name');
    expect(res).to.have.property('removed', false, 'Missing required property removed');

    const found = await Locations.findById(res._id);
    expect(found).to.have.property('name', name, 'ID Lookup returned unexpected result');
  });

  it('Fails if the name already exists', async () => {
    // TODO: Write a suitable test
    throw new Error('Not implemented');
  });
});
