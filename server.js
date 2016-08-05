// polyfills
import 'isomorphic-fetch';
import 'babel-polyfill';

import express from 'express';
import getExchangeRate from 'api/services/get-exchange-rate';
import getExpenses from 'api/services/get-expenses';
import getTasks from 'api/services/get-tasks';
import auth from 'http-auth';

const app = express();

const config = process.env;

if (config.APPLICATION_AUTH_ENABLED === 'true') {
  const authentication = auth.basic({
      realm: "Marcin's dashboard"
    }, (login, password, callback) => {
      callback(login === config.APPLICATION_LOGIN && password === config.APPLICATION_PASSWORD);
    }
  );
  app.use(auth.connect(authentication));
}

app.use('/', express.static('public'));

app.get('/api/exchange-rates/:baseCurrency-:targetCurrency', async (request, response) => {
  const params = request.params;

  try {
    const rate = await getExchangeRate(params.baseCurrency, params.targetCurrency);
    response.send(rate);
  } catch (e) {
    response.status(500).end('Failed to get the exchange rate');
  }
});

app.get('/api/expenses', async (request, response) => {
  try {
    const expenses = await getExpenses();
    response.send(expenses);
  } catch (e) {
    response.status(500).end('Failed to get the expenses');
  }
});

app.get('/api/tasks', async (request, response) => {
  try {
    const expenses = await getTasks();
    response.send(expenses);
  } catch (e) {
    response.status(500).end('Failed to get the tasks');
  }
});

const port = (config.PORT || 3000);
app.listen(port, function () {
  console.log('Application running on port ' + port + '.');
});
