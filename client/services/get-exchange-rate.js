export default async function getExchangeRate(baseCurrency, targetCurrency) {
  try {
    const rateRequest = await fetch(`/api/exchange-rates/${baseCurrency}-${targetCurrency}`, {
      credentials: 'same-origin'
    });

    if (!rateRequest.ok) {
      throw new Error('Failed to fetch the exchange rate.');
    }

    return await rateRequest.text();
  } catch (e) {
    throw new Error('Failed to fetch the exchange rate.');
  }
}
