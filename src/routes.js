import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage/index';
import ResultsPage from './pages/ResultsPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/results" exact component={ResultsPage} />
        </BrowserRouter>
    );
}

export default Routes;