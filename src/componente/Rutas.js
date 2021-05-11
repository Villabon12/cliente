import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './login/FormLogin';
import Registro from './login/FormRegister';
import Footer from './partial/footer';
import Navbar from './partial/navbar';
import About from './web/header/about.jsx';
import Contact from './web/header/contact.jsx';
import Home from './web/header/home.jsx';
import Blog from './web/header/blog.jsx';

const Rutas = () => {
  return (
    <>
      <Navbar/>
      <br/><br/><br/><br/><br/><br/><br/>
      <Switch>
        <Route exact path="/inicio" render={(props) => (<Home {...props} />)} />
        <Route exact path="/nosotros" render={(props) => (<About {...props} />)} />
        <Route exact path="/contactos" render={(props) => (<Contact {...props} />)} />
        <Route exact path="/login" render={(props) => (<Login {...props} />)} />
        <Route exact path="/registro" render={(props) => (<Registro {...props} />)} />
        <Route exact path="/blog" render={(props) => (<Blog {...props} />)} />
        <Redirect to="/inicio"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default Rutas;
