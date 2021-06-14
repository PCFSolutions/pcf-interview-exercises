/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from 'chai';
import 'mocha';
import update from './update';
import Locations, { Location, LocationLean } from '../location.model';

describe('Location :: Update', async () => {
  it('The name can be changed', async () => {
    // TODO: Write a suitable test
    throw new Error('Not implemented');
  });

  it('Fails gracefully if the id isnt found', async () => {
    const id = 'ddb75eaea925fe43ce6842a4';

    await expect(update({ id })).to.be.rejectedWith(`Failed to update Location: No location found with id ${id}`);
  });
});
