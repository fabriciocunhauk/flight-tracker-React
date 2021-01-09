import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;