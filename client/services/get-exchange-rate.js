export default async function getExchangeRate(baseCurrency, targetCurrency) {
  try {
    const rateRequest = await fetch(`/api/exchange-rates/${baseCurrency}-${targetCurrency}`);
    return await rateRequest.text();
  } catch (e) {
    throw new Error('Failed to fetch the exchange rate.');
  }
}
