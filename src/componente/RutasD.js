import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';
import Homead from './admin/homead';
import Producto from './admin/productoad';
import Pedidos from './admin/pedido';
import Usuarios from './admin/usuario';
import Blog from './admin/blogad';
import Dashboard from './admin/cont/dashboard'

function App() {
  return (
    <>
    <Router>
        <Dashboard/>
        <Switch>
          <Route path="/home">
            <Homead/>
          </Route>
          <Route path="/productos">
            <Producto/>
          </Route>
          <Route path="/pedidos">
            <Pedidos/>
          </Route>
          <Route path="/usuarios">
            <Usuarios/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
        </Switch>

    </Router>

    <Router>
    </Router>
            </>
  );
}

export default App;
