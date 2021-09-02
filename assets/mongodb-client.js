'use strict';

const { MongoClient } = require('mongodb');
const ssm = new (require('aws-sdk/clients/ssm'))();

const MONGODB_URI = async () => {
  await ssm.putParameter(params).promise();
  const data = await ssm
    .getParameters({
      Connect: ['MONGODB_URI'],
    })
    .promise();

  return data;
};

const client = new MongoClient(MONGODB_URI(), {
  useNewUrlParsers: true,
  useUnifiedTopology: true,
});

module.exports = client.connect();
