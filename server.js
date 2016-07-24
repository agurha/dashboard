// polyfills
import 'isomorphic-fetch';
import 'babel-polyfill';

import express from 'express';
import getExchangeRate from 'api/services/get-exchange-rate';

const app = express();
const port = (process.env.PORT || 3000);

app.use('/', express.static('public'));

app.listen(port, function () {
  console.log('Server running on port ' + port + '.');
});

app.get('/api/exchange-rates/:baseCurrency-:targetCurrency', async (request, response) => {
  const params = request.params;

  try {
    const rate = await getExchangeRate(params.baseCurrency, params.targetCurrency);
    response.send(rate);
  } catch (e) {
    console.warn(e);
    response.status(500).end('Failed to get the exchange rate.')
  }
});
