import { lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
// Material-ui
import { LinearProgress } from "@material-ui/core";
// Pages
const AppPage = lazy(() => import('../pages/app/app.page'));
const NotFoundPage = lazy(() => import('../pages/not-found/not-found.page'));

export const Routes = (): JSX.Element => {
    return (
        <Suspense fallback={<LinearProgress style={{ height: '0.6vh' }} />}>
            <Switch>
                {/* Main page */}
                <Route path="/" exact component={AppPage} />
                {/* Page Not Found */}
                <Route component={NotFoundPage} />
            </Switch>
        </Suspense>
    );
};
