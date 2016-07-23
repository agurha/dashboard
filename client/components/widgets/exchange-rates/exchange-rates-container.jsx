import React, { Component } from 'react';
import ExchangeRates from './exchange-rates';
import getExchangeRate from 'services/get-exchange-rate';

export default class ExchangeRatesContainer extends Component {
  state = {
    rate: null
  }
  componentDidMount() {
    (async () => {
      try {
        const rate = await getExchangeRate('GBP', 'PLN');
        this.setState({ rate });
      } catch (e) {
        this.setState({ rate: 'fetching failed' });
      }
    })();
  }
  render() {
    return (
      <ExchangeRates rate={this.state.rate}
        baseCurrency="GBP"
        targetCurrency="PLN"
        chartUrl="http://ichart.finance.yahoo.com/z?s=GBPPLN=X&t=3m&q=a&l=on&z=s"
        moreInfoUrl="http://www.bankier.pl/waluty/kursy-walut/nbp/GBP" />
    );
  }
}
