export default async function requestFromApi(url) {
  try {
    const request = await fetch(`/api/${url}`, {
      credentials: 'same-origin'
    });

    if (!request.ok) {
      throw new Error('Failed to fetch the data.');
    }

    return request;
  } catch (e) {
    throw new Error('Failed to fetch the data.');
  }
}
