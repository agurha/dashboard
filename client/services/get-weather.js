import requestFromApi from './utils/request-from-api';

export default async function getWeather(baseCurrency, targetCurrency) {
  try {
    const request = await fetch('http://api.apixu.com/v1/forecast.json?key=[[[[[secret]]]]]&q=London&days=3');

    if (!request.ok) {
      throw new Error('Failed to fetch the data.');
    }

    return await request.json();
  } catch (e) {
    throw new Error('Failed to fetch the data.');
  }
}
