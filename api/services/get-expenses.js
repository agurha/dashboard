import request from 'request';
import cheerio from 'cheerio';
import superagent from 'superagent';

export default function getExpenses() {
  const username = process.env.CASHCONTROL_USERNAME;
  const password = process.env.CASHCONTROL_PASSWORD;

  const client = request.defaults({ jar: true });

  return new Promise((resolve, reject) => {
    client.post(
      'https://www.cashcontrolapp.com/dashboard',
      { form: { username, password, button_submit: 'Submit' } },
      error => {
        if (error) {
          reject(new Error('Failed to connect to CashControl'));
        }

        client.get('https://www.cashcontrolapp.com/reports', (error, response, body) => {
          if (error) {
            reject(new Error('Failed to connect to CashControl'));
          }

          if (body.includes('Your session has expired!')) {
            reject(new Error('Failed to authenticate to CashControl'));
          }

          const expenses = getExpensesForCurrentMonth(body);

          if (expenses.length) {
            resolve(expenses);
          } else {
            reject(new Error('Failed to get the expenses from CashControl'))
          }
        });
      }
    );
  });
}

function getExpensesForCurrentMonth(responseBody) {
  const $ = cheerio.load(responseBody);
  return $('#rapoarte_general_switchContainer2 li').eq(2).text().replace('Expenses-£', '');
}
