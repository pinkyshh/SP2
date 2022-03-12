// File: ./models/customer_point.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;


var AnswerSchema = new Schema({
  user_id   : String,
  images : [{
    _id: String,
    tag: String,
    url: String,
    asso: String,
    isSelected: String
  }],
  date : String

});

//Export function to create "CustomerPointSchema" model class
module.exports = mongoose.model('Answer', AnswerSchema );