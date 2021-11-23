export const fetcher = async (resource, init) =>
  fetch(resource, init).then(res => res.json());
