const mongoose = require('mongoose');

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

module.exports.schema = assetSchema;
