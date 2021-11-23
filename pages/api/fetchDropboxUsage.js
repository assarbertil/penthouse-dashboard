const fetch = require("node-fetch");

const dropboxAPIKey = process.env.DROPBOX_API_KEY;

const handler = async event => {
  const res = await fetch(
    "https://api.dropboxapi.com/2/users/get_space_usage",
    {
      method: "post",
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${dropboxAPIKey}`,
      },
    }
  ).then(res => res.json());

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST",
    },
    body: JSON.stringify(res),
  };
};

module.exports = { handler };
