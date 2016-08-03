import React from 'react';
import getDateTime from 'services/get-date-time';
import DateAndTime from './date-and-time';

export default class DateAndTimeContainer extends React.Component {
  constructor() {
    super();
    this.state = getDateTime();
  }
  componentDidMount() {
    this.clock = setInterval(() => {
      this.setState(getDateTime());
    }, 10 * 1000);
  }
  render() {
    return <DateAndTime {...this.state} />;
  }
}
