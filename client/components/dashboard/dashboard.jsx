import React from 'react';
import ExchangeRatesContainer from 'components/widgets/exchange-rates/exchange-rates-container';
import styles from './dashboard.scss';

export default class Dashboard extends React.Component {
  render() {
    return (
      <main className={styles.container}>
        <div className={styles.widgets}>
          <ExchangeRatesContainer />
        </div>
      </main>
    );
  }
}
