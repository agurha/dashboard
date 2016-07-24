import React, { Component, PropTypes } from 'react';
import Widget from 'components/widget/widget';
import { CardTitle, CardText } from 'react-toolbox/lib/card';
import styles from './exchange-rates.scss';

export default class ExchangeRates extends Component {
  renderCurrentRate() {
    if (this.props.rate) {
      return this.props.rate + ' ' + this.props.targetCurrency;
    } else {
      return 'loading...';
    }
  }
  render() {
    const title = `${this.props.baseCurrency}/${this.props.targetCurrency} exchange rate`;

    return (
      <Widget title={`${this.props.baseCurrency}/${this.props.targetCurrency} exchange rate`} className={styles.card}>
        <CardText>
          <p>
            Current rate: <strong>{this.renderCurrentRate()}</strong>
          </p>
          <img className={styles.chart} src={this.props.chartUrl} alt={title + ' chart'} />
          <p>
            <a href={this.props.moreInfoUrl} target="_blank">More details</a>
          </p>
        </CardText>
      </Widget>
    );
  }
}

ExchangeRates.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  chartUrl: PropTypes.string.isRequired,
  moreInfoUrl: PropTypes.string.isRequired,
  rate: PropTypes.string,
};
