import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from './store-config/store';
// Providers
import { ThemeProvider } from './shared/components/theme-provider/theme-provider';
import { LanguageProvider } from './shared/components/language-provider/language-provider';
// Style
import './shared/styles/global.scss';
// Components
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
