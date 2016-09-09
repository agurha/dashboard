import React, { Component } from 'react';
import Tasks from './tasks';
import getTasks from 'services/get-tasks';

export default class TasksContainer extends Component {
  state = {
    tasks: null,
    status: 'loading'
  }
  componentDidMount() {
    (async () => {
      try {
        const tasks = await getTasks();
        this.setState({ tasks, status: 'loaded' });
      } catch (e) {
        this.setState({ status: 'error' });
      }
    })();
  }
  render() {
    return (
      <Tasks tasks={this.state.tasks}
        status={this.state.status}
        boardUrl="http://kanbanflow.com" />
    );
  }
}
