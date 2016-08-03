import React, { Component, PropTypes } from 'react';
import Widget from 'components/widget/widget';
import { CardText } from 'react-toolbox/lib/card';
import styles from './date-and-time.scss';

export default class DateAndTime extends Component {
  render() {
    return (
      <Widget className={styles.card}>
        <CardText>
          <div className={styles.time}>
            <span>{this.props.hour}</span>
            <span>:</span>
            <span>{this.props.minute}</span>
          </div>
          <div className={styles.date}>{this.props.dayOfWeek}, {this.props.date}</div>
        </CardText>
      </Widget>
    );
  }
}

DateAndTime.propTypes = {
  hour: PropTypes.string.isRequired,
  minute: PropTypes.string.isRequired,
  dayOfWeek: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
