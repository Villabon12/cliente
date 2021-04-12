
import React from 'react';


const Navbar = (props)=>{
    return(
        <div id="page">
            <nav class="fh5co-nav" role="navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 text-center logo-wrap">
                            <div id="fh5co-logo"><a href="inicio">Sisu<span>.</span></a></div>
                        </div>    
                      
                        <div class="col-xs-12 text-center menu-1 menu-wrap">
                            <ul>
                                <li class=""><a href="inicio">Inicio</a></li>
                                <li><a href="blog">Blog</a></li>
                                <li class="has-dropdown">
                                    <a href="producto">Productos</a>
                                    <ul class="dropdown">
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