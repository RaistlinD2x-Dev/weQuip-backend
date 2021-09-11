const mongoose = require('mongoose');

// create schema validation for mongoose model
const vendorSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
    },
    payToAddress: {
      type: Object,
      streetAddress: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      postalCode: {
        type: String,
      },
    },
    // billingAddress: {
    //   type: Object,
    //   billingStreetAddress: {
    //     type: String,
    //   },
    //   billingState: {
    //     type: String,
    //   },
    //   billingCountry: {
    //     type: String,
    //   },
    //   billingPostalCode: {
    //     type: String,
    //   },
    // },
  },
  { timestamps: true }
);

// create mongoose model from Schema
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
