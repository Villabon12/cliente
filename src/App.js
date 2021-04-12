import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';
import Login from './componente/login/login';
import Registro from './componente/login/register';
import Footer from './componente/partial/footer';
import Navbar from './componente/partial/navbar';
import About from './componente/web/header/about';
import Contact from './componente/web/header/contact';
import Home from './componente/web/header/home';

function App() {
  return (
    <>
    <Router>

        <Navbar/>
        <Switch>
          <Route path="/inicio">
            <Home/>
          </Route>
          <Route path="/nosotros">
            <About/>
          </Route>
          <Route path="/contactos">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registro">
            <Registro/>
          </Route>
          <Route path="">

          </Route>
          <Route path="">

          </Route>
          <Route path="">

          </Route>
        </Switch>
        <Footer/>

    </Router>

    <Router>
    </Router>
            </>
  );
}

export default App;
