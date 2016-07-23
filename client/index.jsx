// polyfills
import 'babel-polyfill';
import 'isomorphic-fetch';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from 'components/dashboard/dashboard';

ReactDOM.render(<Dashboard />, document.getElementById("app"));
