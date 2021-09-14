const mongoose = require('mongoose');

// create schema validation for mongoose model
const locationSchema = new mongoose.Schema(
  {
    address: {
      type: Object,
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      country: {
        type: String
      }
    },
    locationAcronym: {
      type: String
    }
  },
  { timestamps: true }
);

// create mongoose model from Schema
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
