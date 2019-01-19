"use strict";

var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
var mongoose = require("mongoose");
require("sinon-mongoose");

var CustomerAddress = require("../../api/models/addressModel");

describe("Customer Address Controller Tests", function() {
  it("should return all addresses", function(done) {
    var CustomerAddressMock = sinon.mock(CustomerAddress);
    var expectedResult = { status: true, addresses: [] };
    CustomerAddressMock.expects("find")
      .withArgs({ customer_id: 12345 })
      .yields(null, expectedResult);
    CustomerAddress.find({ customer_id: 12345 }, function(err, result) {
      CustomerAddressMock.verify();
      CustomerAddressMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should return a customer address by id", function(done) {
    var CustomerAddressMock = sinon.mock(CustomerAddress);
    var expectedResult = { status: true, address: CustomerAddress };

    CustomerAddressMock.expects("find")
      .withArgs({ customer_id: 12345, _id: 23456 })
      .yields(null, expectedResult);
    CustomerAddress.find({ customer_id: 12345, _id: 23456 }, function(
      err,
      result
    ) {
      CustomerAddressMock.verify();
      CustomerAddressMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should create a new customer address", function(done) {
    var CustomerAddressMock = sinon.mock(
      new CustomerAddress({
        customer_id: "12345",
        street_address: "123 Big Walk Way",
        postal_code: "75023",
        country: "US"
      })
    );
    var customerAddress = CustomerAddressMock.object;
    var expectedResult = { status: true, customerAddress: customerAddress };
    CustomerAddressMock.expects("save").yields(null, expectedResult);
    customerAddress.save(function(err, result) {
      CustomerAddressMock.verify();
      CustomerAddressMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should update a customer address by id", function(done) {
    var CustomerAddressMock = sinon.mock(
      new CustomerAddress({
        customer_id: "12345",
        street_address: "123 Big Walk Way",
        postal_code: "75023",
        country: "US"
      })
    );
    var customerAddress = CustomerAddressMock.object;
    var expectedResult = { status: true, address: customerAddress };

    CustomerAddressMock.expects("save")
      .withArgs({ _id: 12345, street_address: "509 Charter Road" })
      .yields(null, expectedResult);
    customerAddress.save(
      { _id: 12345, street_address: "509 Charter Road" },
      function(err, result) {
        CustomerAddressMock.verify();
        CustomerAddressMock.restore();
        expect(result.status).to.be.true;
        done();
      }
    );
  });

  it("should delete a customer address by id", function(done) {
    var CustomerAddressMock = sinon.mock(CustomerAddress);
    var expectedResult = { status: true };
    CustomerAddressMock.expects("remove")
      .withArgs({ _id: 12345 })
      .yields(null, expectedResult);
    CustomerAddress.remove({ _id: 12345 }, function(err, result) {
      CustomerAddressMock.verify();
      CustomerAddressMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });
});
