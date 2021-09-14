const mongoose = require('mongoose');

// create schema validation for mongoose model
const commoditySchema = new mongoose.Schema(
  {
    itemShortName: {
      type: String,
    },
    itemLongName: {
      type: String,
    },
    manufacturerPartNumber: {
      type: String,
    },
    internalPartNumber: {
      type: String,
    },
    unitOfMeasure: {
      type: String,
    },
    price: {
      type: String,
    },
    itemDescription: {
      type: String,
    },
    vendorsData: {
      type: Object,
      vendorName: {
        type: String
      },
      vendorPartNumber: {
        type: String
      }
    },
    categoryCode: {
      type: String,
    },
    productTypeCode: {
      type: String,
    },
  },
  { timestamps: true },
  { collection: 'commodities'}
);

// create mongoose model from Schema
const Commodity = mongoose.model('Commodity', commoditySchema);

module.exports = Commodity;
