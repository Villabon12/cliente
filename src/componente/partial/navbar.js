
import React, { useState, useEffect } from 'react';


const Navbar = (props)=>{
/*     const [logged, setlogged] = useState(null)
    useEffect(() => {
      const {idUserLoged} = JSON.parse(localStorage.getItem('idUserLoged'))
       console.log('hola', idUserLoged)
    }, []) */
    return(
        <div id="page">
            <nav className="fh5co-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center logo-wrap">
                            <div id="fh5co-logo"><a href="inicio">Sisu<span>.</span></a></div>
                        </div>
                        <div className="col-xs-12 text-center menu-1 menu-wrap">
                            <ul>
                                <li className=""><a href="inicio">Inicio</a></li>
                                <li><a href="blog">Blog</a></li>
                                <li className="has-dropdown">
                                    <a href="productos">Productos</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Caliente</a></li>
                                        <li><a href="#">Frio</a></li>
                                        <li><a href="#">Cocteles</a></li>
                                        <li><a href="#">Bebidas</a></li>
                                    </ul>
                                </li>
                                <li><a href="nosotros">Nosotros</a></li>
                                <li><a href="contactos">Contactenos</a></li>
                                <li><a href="login">Iniciar Sesion</a></li>
                            </ul>
                        </div>
                        
                        </div>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbar;