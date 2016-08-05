import requestFromApi from './utils/request-from-api';

export default async function getExchangeRate(baseCurrency, targetCurrency) {
  const response = await requestFromApi(`exchange-rates/${baseCurrency}-${targetCurrency}`);
  return await response.text();
}
