import React, { Component } from 'react';
import Weather from './weather';
import getWeather from 'services/get-weather';

export default class WeatherContainer extends Component {
  state = {
    weather: null,
    status: 'loading'
  }
  componentDidMount() {
    (async () => {
      try {
        const weather = await getWeather();
        this.setState({ weather, status: 'loaded' });
      } catch (e) {
        this.setState({ status: 'error' });
      }
    })();
  }
  render() {
    return <Weather {...this.state} />;
  }
}
