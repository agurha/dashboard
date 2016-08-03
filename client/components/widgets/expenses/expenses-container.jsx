import React, { Component } from 'react';
import Expenses from './expenses';
import getExpenses from 'services/get-expenses';
import moment from 'moment';

export default class ExpensesContainer extends Component {
  state = {
    expenses: null
  }
  componentDidMount() {
    (async () => {
      try {
        const expenses = await getExpenses();
        this.setState({ expenses });
      } catch (e) {
        this.setState({ expenses: 'fetching failed' });
      }
    })();
  }
  render() {
    return <Expenses expenses={this.state.expenses} />;
  }
}
