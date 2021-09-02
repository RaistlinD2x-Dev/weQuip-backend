const { MongoClient } = require('mongodb');
const ssm = new (require('aws-sdk/clients/ssm'))();

let response;

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

// const MONGODB_URI = async () => {
//   const data = await ssm
//     .getParameters({
//       Connect: ['MONGODB_URI'],
//     })
//     .promise();

//   return data;
// };

const client = new MongoClient(
  'mongodb+srv://dbuser:Today123!@wequipdb.ylbzr.mongodb.net/weQuipDB?retryWrites=true&w=majority'
);

module.exports.lambdaHandler = async (event, context) => {
  const clientWait = await client;

  return clientWait.db().databaseName || event.error.message;
};
