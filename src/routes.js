import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage/index';
import ResultPage from './pages/ResultPage/ResultPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/result" component={ResultPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;