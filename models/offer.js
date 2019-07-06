const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const offerSchema = new Schema({
  user: {type : Schema.Types.ObjectId, ref : 'User'},
  objective: { type: String },
  title: { type: String },
  description: { type: String },
  animalType: { type: String }
}, {timestamps: true});

// 'users' refers to the collection in locals database
const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;