import React, { Component, PropTypes } from 'react';
import Widget from 'components/widget/widget';
import { CardText } from 'react-toolbox/lib/card';
import styles from './expenses.scss';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';

export default class Expenses extends Component {
  renderExpenses() {
    if (this.props.expenses) {
      return this.props.expenses;
    } else {
      return 'loading...';
    }
  }
  render() {
    return (
      <Widget title="Expenses">
        <CardText className={styles.card}>
          <p className={styles.description}>This month:</p>
          <Chip>
            <Avatar title="£" className={styles.currencySymbol} />{this.renderExpenses()}
          </Chip>
        </CardText>
      </Widget>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.string.isRequired
};
