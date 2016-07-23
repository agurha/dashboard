import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import styles from './exchange-rates.scss';

export default class ExchangeRates extends React.Component {
  render() {
    return (
      <Card className={styles.card}>
        <CardTitle title="GBP/PLN exchange rate" />
        <CardText>
          <img className={styles.chart} src="http://cdn.exchangerates.org.uk/graphs/GBP-PLN-90-day-exchange-rate-history-graph-large.png" alt="GBP/PLN Exchange rate chart" />
        </CardText>
      </Card>
    );
  }
}
