'use strict';

// import asset Model
const assetModel = require('./assetSchema.js');

// import connection helper
const mongoConnect = require('./mongoconnection.js');

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

module.exports.lambdaHandler = async (event, context) => {
  // allows the event loop to be paused when working with cached DB
  context.callbackWaitsForEmptyEventLoop = false;

  // await the DB connection
  await mongoConnect.connect();

  const result = await assetModel.find({})

  // required info to handle CORS and response data, eventObj can be modified
  const response = {
    statusCode: 200,
    body: result,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return response;
};
