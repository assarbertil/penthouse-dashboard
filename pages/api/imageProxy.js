// pages/api/imageproxy.js

export default async function imageProxy(req, res) {
  const url = decodeURIComponent(req.query.url);
  const result = await fetch(url);
  const body = await result.body;
  body.pipe(res);
}

/* 
export default async function imageProxy(req, res) {
  const url = req.query.url;
  const response = await fetch(url).then();

  res.status(200).send(response);
}
 */
