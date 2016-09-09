import React, { Component, PropTypes } from 'react';
import Widget from 'components/widget/widget';
import { CardText } from 'react-toolbox/lib/card';
import styles from './weather.scss';

export default class Weather extends Component {
  renderContent() {
    return (
      <div>
        <CardText className={styles.cardText}>
          Weather forecast
        </CardText>
      </div>
    );
  }
  render() {
    return (
      <Widget title="Weather forecast" status={this.props.status}>
        {() => this.renderContent()}
      </Widget>
    );
  }
}

Weather.propTypes = {
  tasks: PropTypes.object,
  status: PropTypes.string.isRequired
};
