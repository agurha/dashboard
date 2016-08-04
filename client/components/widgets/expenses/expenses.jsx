import React, { Component, PropTypes } from 'react';
import Widget from 'components/widget/widget';
import { CardText } from 'react-toolbox/lib/card';
import styles from './expenses.scss';
import ProgressBar from 'react-toolbox/lib/progress_bar';

export default class Expenses extends Component {
  getFormattedCurrency(number) {
    return this.props.currencySymbol + number.toFixed(2);
  }
  renderContent() {
    if (this.props.status === 'loading') {
      return (
        <div className={styles.loader}>
          <ProgressBar type="circular" mode="indeterminate" multicolor={true} />
        </div>
      );
    } else if (this.props.status === 'error') {
      return 'Failed to load the expenses';
    } else {
      return (
        <div>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Total</td>
                <td className={styles.amount}>
                  {this.getFormattedCurrency(this.props.expenses.total)}
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <h6 className={styles.tableHeader}>Per category</h6>
                </td>
              </tr>
              {this.renderPerCategoryExpenses()}
            </tbody>
          </table>
        </div>
      )
    }
  }
  renderPerCategoryExpenses() {
    return this.props.expenses.perCategory.map(category => {
      return (
        <tr key={category.name}>
          <td>{category.name}</td>
          <td className={styles.amount}>
            {this.getFormattedCurrency(category.amount)}
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <Widget title="This month's expenses">
        <CardText>
          {this.renderContent()}
        </CardText>
      </Widget>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.object.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['loading', 'loaded', 'error']).isRequired
};
