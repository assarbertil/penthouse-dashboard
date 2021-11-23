const fetch = require("node-fetch");

const twitterToken = process.env.TWITTER_TOKEN;

const handler = async event => {
  const options = {
    method: "GET",
    redirect: "follow",
    headers: {
      Authorization: `Bearer ${twitterToken}`,
    },
  };

  const globalResponse = await fetch(
    "https://api.twitter.com/1.1/trends/place.json?id=1",
    options
  ).then(res => res.json());

  const swedenResponse = await fetch(
    "https://api.twitter.com/1.1/trends/place.json?id=906057",
    options
  ).then(res => res.json());

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST",
    },
    body: JSON.stringify({ globalResponse, swedenResponse }),
  };
};

module.exports = { handler };
