const ufosightings = require('./ufosightings/ufosightings.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(ufosightings);
};
