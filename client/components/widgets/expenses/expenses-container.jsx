import React, { Component } from 'react';
import Expenses from './expenses';
import getExpenses from 'services/get-expenses';
import moment from 'moment';

export default class ExpensesContainer extends Component {
  state = {
    expenses: null,
    status: 'loading'
  }
  componentDidMount() {
    (async () => {
      try {
        const expenses = await getExpenses();
        this.setState({ expenses, status: 'loaded' });
      } catch (e) {
        this.setState({ status: 'error' });
      }
    })();
  }
  render() {
    return <Expenses currencySymbol="£" expenses={this.state.expenses} status={this.state.status} />;
  }
}
