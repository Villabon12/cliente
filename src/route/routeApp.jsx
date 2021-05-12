import React, {useContext} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import {PublicRoute} from './publicRoute';
import {PrivateRoute} from './privateRoute';
import { AuthContext } from '../auth/AuthContex';
import Rutas from '../componente/Rutas';
import Dashboard from '../componente/RutasD';

export const Routeapp = () => {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <Switch>
                <PublicRoute path="/" component={Rutas} isAuthenticated={user.logged}/>
                <PrivateRoute exact path="/admin" component={Dashboard} isAuthenticated = {user.logged}/>
            </Switch>
        </Router>
    );
}
