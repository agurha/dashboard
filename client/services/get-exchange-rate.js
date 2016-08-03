export default async function getExchangeRate(baseCurrency, targetCurrency) {
  try {
    const request = await fetch(`/api/exchange-rates/${baseCurrency}-${targetCurrency}`, {
      credentials: 'same-origin'
    });

    if (!request.ok) {
      throw new Error('Failed to fetch the exchange rate.');
    }

    return await request.text();
  } catch (e) {
    throw new Error('Failed to fetch the exchange rate.');
  }
}
