import React, { Component } from 'react';
import ExchangeRates from './exchange-rates';
import getExchangeRate from 'services/get-exchange-rate';

export default class ExchangeRatesContainer extends Component {
  state = {
    rate: null,
    status: 'loading'
  }
  componentDidMount() {
    (async () => {
      try {
        const rate = await getExchangeRate('GBP', 'PLN');
        this.setState({ rate, status: 'loaded' });
      } catch (e) {
        console.error(e);
        this.setState({ status: 'error' });
      }
    })();
  }
  render() {
    return (
      <ExchangeRates status={this.state.status}
        rate={this.state.rate}
        baseCurrency="GBP"
        targetCurrency="PLN"
        currencySymbol="£"
        chartUrl="http://ichart.finance.yahoo.com/z?s=GBPPLN=X&t=3m&q=a&l=on&z=s"
        detailsUrl="http://www.bankier.pl/waluty/kursy-walut/nbp/GBP" />
    );
  }
}
