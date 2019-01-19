"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
  customer_id: {
    type: String,
    required: "Enter the customer id"
  },
  street_address: {
    type: String,
    required: "Enter the street address"
  },
  postal_code: {
    type: String,
    required: "Enter the postal code"
  },
  country: {
    type: String,
    required: "Enter the country"
  }
});

module.exports = mongoose.model("Customer_Addresses", AddressSchema);
