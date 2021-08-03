const assert = require('assert');
const app = require('../../src/app');

describe('\'ufosightings\' service', () => {
  it('registered the service', () => {
    const service = app.service('ufosightings');

    assert.ok(service, 'Registered the service');
  });
});
