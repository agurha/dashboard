import request from 'request';
import cheerio from 'cheerio';
import sortBy from 'lodash/fp/sortBy';

export default function getExpenses() {
  const username = process.env.CASHCONTROL_USERNAME;
  const password = process.env.CASHCONTROL_PASSWORD;

  const client = request.defaults({ jar: true });

  return logInToCashControl(client, username, password)
    .then(() => getExpensesFromReportPage(client));
}

function logInToCashControl(client, username, password) {
  return new Promise((resolve, reject) => {
    client.post(
      'https://www.cashcontrolapp.com/dashboard',
      { form: { username, password, button_submit: 'Submit' } },
      error => {
        if (error) {
          reject(new Error('Failed to connect to CashControl'));
        } else {
          resolve();
        }
      }
    );
  });
}

function getExpensesFromReportPage(client) {
  return new Promise((resolve, reject) => {
    client.get('https://www.cashcontrolapp.com/reports', (error, response, body) => {
      if (error) {
        reject(new Error('Failed to connect to CashControl'));
      }
      if (body.includes('Your session has expired!')) {
        reject(new Error('Failed to authenticate to CashControl'));
      }

      try {
        resolve(readExpensesFromCashControlReport(body));
      } catch (e) {
        reject(new Error('Failed to get the expenses from CashControl'));
      }
    });
  });
}

function readExpensesFromCashControlReport(responseBody) {
  const $ = cheerio.load(responseBody);
  const total = $('#rapoarte_general_switchContainer2 li')
    .eq(2)
    .text()
    .replace('Expenses-£', '')
    .replace(',', '');

  if (!total.length) {
    throw new Error("Failed to extract the expenses data from HTML.")
  }

  let perCategory = [];

  $('table.raport tr.categorygroup').each((index, category) => {
    const amount = $(category).find('td.value')
      .first()
      .text()
      .replace('-£', '');
    const categoryName = $(category).find('td.category')
      .text()
      .trim();

    if (amount !== '0.00') {
      perCategory.push({ name: categoryName, amount: Number(amount) });
    }
  });
  const perCategoryDescending = sortBy('amount', perCategory).reverse();

  return { total: Number(total), perCategory: perCategoryDescending };
}
