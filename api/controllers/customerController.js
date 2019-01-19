"use strict";

var mongoose = require("mongoose"),
  Customer = mongoose.model("Customers");

exports.list_all_customers = function(req, res) {
  Customer.find({}, function(err, customer) {
    if (err) res.json({ status: false, error: err.message });
    res.json({ status: true, customers: customer });
  });
};

exports.create_a_customer = function(req, res) {
  var customer = new Customer(req.body);
  customer.save(function(err, customer) {
    if (err) res.json({ status: false, error: err.message });
    res.json({ status: true, customer: customer });
  });
};

exports.read_a_customer = function(req, res) {
  Customer.findById(req.params.customerId, function(err, customer) {
    if (err) res.json({ status: false, error: err.message });
    res.json({ status: true, customer: customer });
  });
};

exports.update_a_customer = function(req, res) {
  Customer.findOneAndUpdate(
    { _id: req.params.customerId },
    req.body,
    { new: true },
    function(err, customer) {
      if (err) res.json({ status: false, error: err.message });
      res.json({ status: true, customer: customer });
    }
  );
};

exports.delete_a_customer = function(req, res) {
  Customer.remove(
    {
      _id: req.params.customerId
    },
    function(err, customer) {
      if (err) res.json({ status: false, error: err.message });
      res.json({ status: true, message: "Customer successfully deleted" });
    }
  );
};
