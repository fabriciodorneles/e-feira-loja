import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductsList from '../pages/ProductsList';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={ProductsList} />
        <Route path="/signin" exact component={SignIn} />
    </BrowserRouter>
);

export default Routes;
