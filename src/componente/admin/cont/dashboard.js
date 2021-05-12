import React from 'react';

const Dashboard = (props) =>{
    return(
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo">
                        <a class="" href="#s">
                            <img src="" alt="aa"/>
                        </a>
            </div>
            <div class="menu-sidebar__content js-scrollbar1">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">
                        <li class="has-sub">
                            <a href="home">
                                <i class="fas fa-tachometer-alt"></i>Inicio
                            </a>
                        </li>
                        <li>
                            <a href="productos">
                                <i class="fas fa-chart-bar"></i>Producto</a>
                        </li>
                        <li>
                            <a href="pedidos">
                                <i class="fas fa-table"></i>Pedidos</a>
                        </li>
                        <li>
                            <a href="usuarios">
                                <i class="fas fa-calendar-alt"></i>Usuarios</a>
                        </li>
                        <li>
                            <a href="blog">
                                <i class="fas fa-rss"></i>Blog</a>
                        </li>
                        <ul class="list-unstyled navbar__list">
                            <li>
                                <a href="logOut">
                                <i class="fas fa-sign-out-alt"></i>Salir
                                </a>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}


export default Dashboard;
