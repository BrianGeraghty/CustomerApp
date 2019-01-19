"use strict";

var mongoose = require("mongoose"),
  Address = mongoose.model("Customer_Addresses");

exports.list_all_addresses_for_customer = function(req, res) {
  Address.find({ customer_id: req.params.customerId }, function(
    err,
    addresses
  ) {
    if (err) res.json({ status: false, error: err.message });
    res.json({ status: true, addresses: addresses });
  });
};

exports.create_a_customer_address = function(req, res) {
  var address = new Address(req.body);
  address.customer_id = req.params.customerId;
  address.save(function(err, address) {
    if (err) res.json({ status: false, error: err.message });
    res.json({ status: true, address: address });
  });
};

exports.read_customer_address = function(req, res) {
  Address.find(
    { customer_id: req.params.customerId, _id: req.params.addressId },
    function(err, address) {
      if (err) res.json({ status: false, error: err.message });
      res.json({ status: true, address: address });
    }
  );
};

exports.update_customer_address = function(req, res) {
  Address.findOneAndUpdate(
    { customer_id: req.params.customerId, _id: req.params.addressId },
    req.body,
    { new: true },
    function(err, address) {
      if (err) res.json({ status: false, error: err.message });
      res.json({ status: true, address: address });
    }
  );
};

exports.delete_customer_address = function(req, res) {
  Address.remove(
    {
      customer_id: req.params.customerId,
      _id: req.params.addressId
    },
    function(err, address) {
      if (err) res.json({ status: false, error: err.message });
      res.json({ status: true, message: "Address successfully deleted" });
    }
  );
};
