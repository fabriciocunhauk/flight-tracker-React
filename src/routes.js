import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage/index';
import ResultPage from './pages/ResultPage/ResultPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/result" component={ResultPage} />
        </BrowserRouter>
    );
}

export default Routes;