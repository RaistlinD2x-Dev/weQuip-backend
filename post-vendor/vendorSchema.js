const mongoose = require('mongoose');

// create schema validation for mongoose model
const vendorSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
    },
    shippingAddress: {
      type: Object,
      shippingStreetAddress: {
        type: String,
      },
      shippingState: {
        type: String,
      },
      shippingCountry: {
        type: String,
      },
      shippingPostalCode: {
        type: String,
      },
    },
    billingAddress: {
      type: Object,
      billingStreetAddress: {
        type: String,
      },
      billingState: {
        type: String,
      },
      billingCountry: {
        type: String,
      },
      billingPostalCode: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

// create mongoose model from Schema
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
