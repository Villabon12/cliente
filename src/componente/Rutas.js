import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
}from 'react-router-dom';
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

    HOLA MUNDO
{/*       <Navbar/>
        <br/><br/><br/><br/><br/><br/><br/>
        <Switch>
          <Route exact path="/inicio" render={(props)=> (<Home {...props}/>)}/>
          <Route path="nosotros">
            <About/>
          </Route>
          <Route path="contactos">
            <Contact/>
          </Route>
          <Route path="login">
            <Login/>
          </Route>
          <Route path="registro">
            <Registro/>
          </Route>
          <Route path="blog">
            <Blog/>

          </Route>
          <Redirect to="/inicio"/>
        </Switch>
        <Footer/> */}

            </>
  );
}

export default Rutas;
