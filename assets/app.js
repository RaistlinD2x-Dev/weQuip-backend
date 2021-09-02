'use strict';
// secret store AWS
const ssm = new (require('aws-sdk/clients/ssm'))();

// mongoose driver
const mongoose = require('mongoose');

// Schema constructor
const { Schema } = mongoose;

// define Schema Model for document objects to be added to the collection
// Should migrate to models folder in the future
const assetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    otherName: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// 1) Define name of collection in the singular, 2) Define Schema to be used
// this will be exported from the models/modelName.js file in the future
const Test = mongoose.model('Asset', assetSchema);

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

// parse parameter store from AWS to retrive DB URI
const MONGODB_URI = async () => {
  const data = await ssm
    .getParameters({
      Names: ['MONGODB_URI'],
    })
    .promise();

  // parse object returned so it only provides the URI string for DB connection
  return data.Parameters[0].Value;
};

module.exports.lambdaHandler = async (event, context) => {
  // wait until string is returned for db connection
  // const uri = await MONGODB_URI();

  // establish database connection
  // mongoose.connect(uri);

  // instantiate schema object to be added to database
  // const test = new Test(JSON.stringify(event));

  // await the update to the collection
  // const saveData = await test.save();

  // return the data added to the collection
  const json = JSON.stringify({
    Name: 'Jesse',
    otherName: 'Richey',
  });

  try {
    const response = {
      statusCode: 200,
      body: json,
    };
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
