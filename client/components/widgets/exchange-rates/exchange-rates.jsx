import React, { Component, PropTypes } from 'react';
import Widget from 'components/widget/widget';
import styles from './exchange-rates.scss';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';
import { CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

export default class ExchangeRates extends Component {
  getTitle() {
    return `${this.props.baseCurrency}/${this.props.targetCurrency} exchange rate`;
  }
  renderContent() {
    return (
      <CardText className={styles.cardBody}>
        <div className={styles.exchangeRate}>
          <Chip>
            <Avatar title={this.props.currencySymbol} className={styles.currencySymbol} />{this.props.rate} {this.props.targetCurrency}
          </Chip>
        </div>
        <img className={styles.chart} src={this.props.chartUrl} alt="" />
        <p className={styles.moreDetails}><a href={this.props.detailsUrl} target="_blank">More details</a></p>
      </CardText>
    );
  }
  render() {
    return (
      <Widget title={this.getTitle()} className={styles.card} status={this.props.status}>
        {() => this.renderContent()}
      </Widget>
    );
  }
}

ExchangeRates.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  chartUrl: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  detailsUrl: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  rate: PropTypes.string
};
