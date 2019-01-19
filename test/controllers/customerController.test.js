"use strict";

var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
var mongoose = require("mongoose");
require("sinon-mongoose");

var Customer = require("../../api/models/customerModel");

describe("Customer Controller Tests", function() {
  describe("Get all Customers", function() {
    it("should return all Customers", function(done) {
      var CustomerMock = sinon.mock(Customer);
      var expectedResult = { status: true, customers: [] };
      CustomerMock.expects("find").yields(null, expectedResult);
      Customer.find(function(err, result) {
        CustomerMock.verify();
        CustomerMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });

    it("should return error", function(done) {
      var CustomerMock = sinon.mock(Customer);
      var expectedResult = { status: false, error: "" };
      CustomerMock.expects("find").yields(null, expectedResult);
      Customer.find(function(err, result) {
        CustomerMock.verify();
        CustomerMock.restore();
        expect(result.status).to.be.false;
        done();
      });
    });
  });

  it("should create a new customer", function(done) {
    var CustomerMock = sinon.mock(new Customer({ name: "Brian" }));
    var customer = CustomerMock.object;
    var expectedResult = { status: true, customer: customer };
    CustomerMock.expects("save").yields(null, expectedResult);
    customer.save(function(err, result) {
      CustomerMock.verify();
      CustomerMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should update a customer by id", function(done) {
    var CustomerMock = sinon.mock(new Customer({ name: "Ryan" }));
    var customer = CustomerMock.object;
    var expectedResult = { status: true, customer: customer };

    CustomerMock.expects("save")
      .withArgs({ _id: 12345 })
      .yields(null, expectedResult);
    customer.save({ _id: 12345 }, function(err, result) {
      CustomerMock.verify();
      CustomerMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should delete a customer by id", function(done) {
    var CustomerMock = sinon.mock(Customer);
    var expectedResult = { status: true };
    CustomerMock.expects("remove")
      .withArgs({ _id: 12345 })
      .yields(null, expectedResult);
    Customer.remove({ _id: 12345 }, function(err, result) {
      CustomerMock.verify();
      CustomerMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });
});
