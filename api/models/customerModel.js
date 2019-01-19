"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  name: {
    type: String,
    required: "Enter the customer name"
  }
});

module.exports = mongoose.model("Customers", CustomerSchema);
