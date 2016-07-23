import React from 'react';
import ExchangeRates from 'components/widgets/exchange-rates/exchange-rates';
import styles from './dashboard.scss';

export default class Dashboard extends React.Component {
  render() {
    return (
      <main className={styles.container}>
        <div className={styles.widgets}>
          <ExchangeRates />
        </div>
      </main>
    );
  }
}
