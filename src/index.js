/**
 * Created by Khang @Author on 15/01/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import { Provider } from 'react-redux';
import store from './redux/store';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);