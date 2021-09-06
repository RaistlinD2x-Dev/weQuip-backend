const mongoose = require('mongoose');

// create schema validation for mongoose model
const assetSchema = new mongoose.Schema(
  {
    productGroup: {
      type: String,
    },
    assetNumber: {
      type: String,
    },
    serialNumber: {
      type: String,
    },
    assetCost: {
      type: Number,
    },
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
    manufacturerName: {
      type: String,
    },
    assetLocation: {
      type: String,
    },
    vendor: {
      type: String,
    },
    lifeSpan: {
      type: Number,
    },
    itemDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

// create mongoose model from Schema
const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;
