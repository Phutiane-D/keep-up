// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-central-1",
});
//Create the DocumentClient service object
const docClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1" });
console.log("This is the date now", Date.now());
module.exports.postMedia = async (e, ctx, callback) => {
  const { title, link, description, suburb,  } = JSON.parse(e.body);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST',
  };

  var params = {
    TableName: process.env.MEDIA_TABLE,
    Item: {
      title,
      link,
      description,
      eventId: Date.now(),
      suburb,
    },
  };

  let responseBody = "";
  let statusCode = 0;

  // Call DynamoDB to add the item to the table
  try {
    const data = await docClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 200;
  } catch (err) {
    responseBody = JSON.stringify({
      message: err,
    });
    statusCode = 403;
  }

  const response = {
    statusCode,
    headers,
    body: responseBody,
  };
  return response;
};
