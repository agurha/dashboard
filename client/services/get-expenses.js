import requestFromApi from './utils/request-from-api';

export default async function getExpenses(baseCurrency, targetCurrency) {
  const response = await requestFromApi('expenses');
  return await response.json();
}
