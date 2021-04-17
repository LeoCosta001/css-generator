import { Fragment, useContext } from 'react';
import { Router, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserHistory } from 'history';
// Components
import { FallbackErrorBoundary } from './shared/components/fallback-error-boundary/fallback-error-boundary.component';
// Material-ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
// Routes
import { Routes } from './routes/main.route';
import { ThemeContext } from './shared/components/theme-provider/theme-provider';

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
                light: '#4dabf5',
                main: '#2196f3',
                dark: '#1769aa',
                contrastText: '#fff',
            },
            secondary: {
                light: '#81c784',
                main: '#4caf50',
                dark: '#388e3c',
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
