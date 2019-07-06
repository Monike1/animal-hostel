const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  houseNumber: { type: String },
  city: { type: String },
  street: { type: String },
  zipcode: { type: String },
  description: { type: String },
  profilePhoto: { type: String },
  messages: [ { type : Schema.Types.ObjectId, ref : 'Message' } ],
  animals: [ { type : Schema.Types.ObjectId, ref : 'Animal' } ],
  offers: [ {type : Schema.Types.ObjectId, ref : 'Offer'} ],
  password: { type: String },
}, {timestamps: true});

// 'users' refers to the collection in locals database
const User = mongoose.model('User', userSchema);
module.exports = User;