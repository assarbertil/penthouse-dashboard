const fetch = require("node-fetch");

const dropboxAPIKey = process.env.DROPBOX_API_KEY;

export default async function handler(req, res) {
  const response = await fetch(
    "https://api.dropboxapi.com/2/users/get_space_usage",
    {
      method: "post",
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${dropboxAPIKey}`,
      },
    }
  ).then(response => response.json());

  res.status(200).json(response);
}
