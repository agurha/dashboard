import requestFromApi from './utils/request-from-api';

export default async function getTasks(baseCurrency, targetCurrency) {
  const response = await requestFromApi('tasks');
  return await response.json();
}
