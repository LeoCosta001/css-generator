import { Fragment, useContext } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ErrorBoundary } from 'react-error-boundary';

// Material
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';

// Routes
import { Routes } from './routes/main.route';
import { ThemeContext } from './shared/components/theme-provider/theme-provider';

// Components
import { FallbackErrorBoundary } from './shared/components/fallback-error-boundary/fallback-error-boundary.component';

// History
export const history = createBrowserHistory();

const App = (): JSX.Element => {

    const { theme } = useContext(ThemeContext);

    const materialTheme = createMuiTheme({
        typography: {
            "fontFamily": `"Open Sans", sans-serif`,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 600,
            "fontWeightBold": 700
        },
        palette: {
            primary: {
                light: '#8561c5',
                main: '#673ab7',
                dark: '#482880',
                contrastText: '#fff',
            },
            secondary: {
                light: theme === 'light' ? '#8561c5' : '#c29fff',
                main: theme === 'light' ? '#673ab7' : '#b388ff',
                dark: theme === 'light' ? '#482880' : '#7d5fb2',
            },
            type: theme
        },
    }, ptBR);

    return (
        <Fragment>
            <ThemeProvider theme={materialTheme}>
                <CssBaseline />
                <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
                    <Router history={history}>
                        <Route path="/" component={Routes} />
                    </Router>
                </ErrorBoundary>
            </ThemeProvider>
        </Fragment>
    );
};

export default App;
