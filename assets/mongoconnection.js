// import aws-sdk and set region
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

//import mongoose driver
const mongoose = require('mongoose');

// import and instantiate SSM
const ssm = new (require('aws-sdk/clients/ssm'))();

// parse parameter store from AWS to retrive DB URI
const MONGODB_URI = async () => {
  try {
    const data = await ssm
      .getParameter({
        Name: 'MONGODB_URI',
      })
      .promise();

    // parse object returned so it only provides the URI string for DB connection
    return data.Parameter.Value;
  } catch (err) {
    console.log(err);
  }
};

// allows for connection to be maintained with multiple Lambda executions
// optimize cold-start times
let conn = null;

connect = async () => {
  try {
    // await and store DB URI
    const uri = await MONGODB_URI();

    // if connection is already established, return the cached connection
    // keeps the DB connection alive for optimization
    if (conn && conn.serverConfig.isConnected()) {
      console.log('using cached instance of MongoDB');
      return Promise.resolve(conn);
    }

    // if no connection exist, create one
    conn = await mongoose.connect(uri);

    // confirmation of db connection if not cached
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: '));
    db.once('open', () => {
      console.log('Connected successfully');
    });

    return conn;
  } catch (err) {
    console.log(err);
  }
};

exports.connect = connect;
