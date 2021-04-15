import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store-config/store';
// Style
import './shared/styles/global.scss';
// Components
import App from './App';
import { ThemeProvider } from './shared/components/theme-provider/theme-provider';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
