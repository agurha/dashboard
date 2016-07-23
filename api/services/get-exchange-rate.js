export default async function getExchangeRate(baseCurrency, targetCurrency) {
  const response = await fetch(`http://www.currency.me.uk/remote/ER-CCCS2-AJAX.php?ConvertTo=${targetCurrency}&ConvertFrom=${baseCurrency}&amount=1`);
  return await response.text();
};
