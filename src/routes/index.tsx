import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ConfirmOrder from '../pages/ConfirmOrder';
import ProductsList from '../pages/ProductsList';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={ProductsList} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/confirm-order" exact component={ConfirmOrder} />
    </BrowserRouter>
);

export default Routes;
