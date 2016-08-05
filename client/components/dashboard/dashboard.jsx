import React from 'react';
import ExchangeRatesContainer from 'components/widgets/exchange-rates/exchange-rates-container';
import DateAndTimeContainer from 'components/widgets/date-and-time/date-and-time-container';
import ExpensesContainer from 'components/widgets/expenses/expenses-container';
import TasksContainer from 'components/widgets/tasks/tasks-container';
import styles from './dashboard.scss';

export default class Dashboard extends React.Component {
  render() {
    return (
      <main className={styles.widgets}>
        <DateAndTimeContainer />
        <ExpensesContainer />
        <TasksContainer />
        <ExchangeRatesContainer />
      </main>
    );
  }
}
