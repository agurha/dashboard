// polyfills
import 'isomorphic-fetch';
import 'babel-polyfill';

import express from 'express';
import getExchangeRate from 'services/get-exchange-rate';
import cors from 'cors';

const app = express();
app.use(cors());

const port = (process.env.API_PORT || 3001);

app.listen(port, function () {
  console.log('API running on port ' + port + '.');
});

app.get('/exchange-rates/:baseCurrency-:targetCurrency', async (request, response) => {
  const params = request.params;

  try {
    const rate = await getExchangeRate(params.baseCurrency, params.targetCurrency);
    response.send(rate);
  } catch (e) {
    response.status(500).end('Failed to get the exchange rate.')
  }
});
