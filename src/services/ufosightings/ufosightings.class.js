const { Service } = require('feathers-mongoose');

exports.Ufosightings = class Ufosightings extends Service {

//NO: but we got it from here:
//
// https://github.com/feathersjs/feathers/issues/334
//
  find(params) {
//    const query = params.query;
//    if(query.description.$search) {
//      query.description = { $regex: new RegExp(query.description.$search) }
//      return super.find(params);
//    } else {
//

      return super.find(params);
//    }
  }

};
