"use strict";
module.exports = function(app) {
  var customer = require("../controllers/customerController");
  var address = require("../controllers/customerAddressController");

  app
    .route("/customers")
    .get(customer.list_all_customers)
    .post(customer.create_a_customer);

  app
    .route("/customers/:customerId")
    .get(customer.read_a_customer)
    .put(customer.update_a_customer)
    .delete(customer.delete_a_customer);

  app
    .route("/customers/:customerId/addresses")
    .get(address.list_all_addresses_for_customer)
    .post(address.create_a_customer_address);

  app
    .route("/customers/:customerId/addresses/:addressId")
    .get(address.read_customer_address)
    .put(address.update_customer_address)
    .delete(address.delete_customer_address);
};
