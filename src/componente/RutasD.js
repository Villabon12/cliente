import React from 'react';
import {
  Switch,
  Route,
  Redirect
}from 'react-router-dom';
import Homead from './admin/homead';
import Producto from './admin/productoad';
import Pedidos from './admin/pedido';
import Usuarios from './admin/usuario';
import Blog from './admin/blogad';
import Dashboard from './admin/cont/dashboard'

function RutasD() {
  return (
    <>
        <Dashboard/>
        <Switch>
        <Route exact path="/home" render={(props) => (<Homead {...props} />)} />
        <Route exact path="/productos" render={(props) => (<Producto {...props} />)} />
        <Route exact path="/pedidos" render={(props) => (<Pedidos {...props} />)} />
        <Route exact path="/usuarios" render={(props) => (<Usuarios {...props} />)} />
        <Route exact path="/blog" render={(props) => (<Blog {...props} />)} />

        <Redirect to="/home"/>

        </Switch>

            </>
  );
}

export default RutasD;
