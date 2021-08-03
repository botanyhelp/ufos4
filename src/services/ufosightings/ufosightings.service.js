// Initializes the `ufosightings` service on path `/ufosightings`
const { Ufosightings } = require('./ufosightings.class');
const createModel = require('../../models/ufosightings.model');
const hooks = require('./ufosightings.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ufosightings', new Ufosightings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ufosightings');

  service.hooks(hooks);
};
