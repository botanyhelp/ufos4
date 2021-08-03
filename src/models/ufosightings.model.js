// ufosightings-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'ufosightings';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    sighted_at_year : { type: Number, required: false },
    sighted_at_month : { type: Number, required: false },
    sighted_at_day : { type: Number, required: false },
    reported_at : { type: Number, required: false },
    location_city : { type: String, required: false },
    location_state : { type: String, required: false },
    shape : { type: String, required: false },
    duration : { type: String, required: false },
    description : { type: String, required: false },
  }, {
    timestamps: false
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
