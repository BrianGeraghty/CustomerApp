# CustomerApp

A simple Node.js RESTful API which interacts with Customers and Customer_Addresses tables.

## Setup instructions

- Download codebase and in terminal run `npm install`
- Startup MongoDB `mongod`
- Run the application: `npm run start`

- Run the tests: `npm test`

### Add data to Customers table
- Using Postman setup a 'Post' request
- Enter the following url http://localhost:3000/customers
- Click Body and select `x-www-form-urlencoded`
- Enter `name` as the key and enter the customers name as the value
- Send the request

### Retreive data from the Customers table
- Setup a 'GET' request in Postman
- Enter the following url http://localhost:3000/customers
- Send the request
- This will return all customers, to return a specific customer only, add the customers id to the end of the url, eg http://localhost:3000/customers/123456

### Add data to Customer_Addresses table
- Using Postman setup a 'Post' request
- Enter the following url http://localhost:3000/customers/{customer_id}/addresses
- Add the following keys: `street_address`, `postal_code`, `country`
- Add values for each key
- Send the request

### Retreive addresses
- Setup a 'GET' request in Postman
- Enter the following url http://localhost:3000/customers/{customer_id}/addresses
- Send the request
- This will return all addresses for this customer
- To return a specific address for a customer, add the address id to the end of the url, eg http://localhost:3000/customers/123456/addresses/987654

### Update a customer or address
- Setup a 'PUT' request in Postman
- Enter the url for the customer or customer address you want to edit
- Click Body and select `x-www-form-urlencoded`
- Add the key and value for the cells you want to update
- Send the request

### Update a customer or address
- Setup a 'DELETE' request in Postman
- Enter the url for the customer or customer address you want to edit
- Send the request


