const twitterToken = process.env.TWITTER_TOKEN;

export default async function handler(req, res) {
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

  res.status(200).json({ globalResponse, swedenResponse });
}
