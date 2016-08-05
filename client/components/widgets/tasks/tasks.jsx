import React, { Component, PropTypes } from 'react';
import Widget from 'components/widget/widget';
import { CardText } from 'react-toolbox/lib/card';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import styles from './tasks.scss';

export default class Tasks extends Component {
  renderTaskGroup(header, tasks) {
    return (
      <div className={styles.group}>
        <h6>{header} ({tasks.length})</h6>
        <ul className={styles.taskList}>
          {tasks.map((task, index) => {
            return (
              <li className={styles.task} key={index}>{task}</li>
            );
          })}
        </ul>
      </div>
    );
  }
  renderContent() {
    return (
      <CardText>
        {this.renderTaskGroup('Today', this.props.tasks.today)}
        {this.renderTaskGroup('This week', this.props.tasks.thisWeek)}
      </CardText>
    );
  }
  render() {
    return (
      <Widget title="Tasks" status={this.props.status}>
        {() => this.renderContent()}
      </Widget>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired
};
