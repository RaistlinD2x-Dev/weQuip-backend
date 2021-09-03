const mongoose = require('mongoose');

// parse parameter store from AWS to retrive DB URI
const MONGODB_URI = async () => {
  const data = await ssm
    .getParameters({
      Names: ['MONGODB_URI'],
    })
    .promise()
    .resolve();

  // parse object returned so it only provides the URI string for DB connection
  return data.Parameters[0].Value;
};

let conn = null;

const uri = MONGODB_URI();

module.exports.connect = async () => {
  if (conn == null) {
    conn = mongoose
      .connect(uri, {
        serverSelectionTimeoutMS: 5000,
      })
      .then(() => mongoose);

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn;
  }

  return conn;
};
