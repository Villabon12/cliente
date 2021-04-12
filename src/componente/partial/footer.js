import React from 'react';


const Footer = (props)=>{
    return(
        <div id="fh5co-footer" role="contentinfo" class="fh5co-section">
            <div class="container">
                <div class="row row-pb-md">
                    <div class="col-md-4 fh5co-widget">
                        <h4>Sisu</h4>
                        <p>El mejor café del mundo</p>
                    </div>
                    <div class="col-md-2 col-md-push-1 fh5co-widget">
                        <h4>Menú</h4>
                        <ul class="fh5co-footer-links">
                            <li><a href="inicio">INICIO</a></li>
                            <li><a href="blog">BLOG</a></li>
                            <li><a href="productos">PRODUCTOS</a></li>
                            <li><a href="contactos">CONTACTENOS</a></li>
                            <li><a href="login">INGRESAR</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4 col-md-push-1 fh5co-widget">
                        <h4>Más información</h4>
                        <ul class="fh5co-footer-links">
                            <li>Cra 1 C N 45 - 11 B/Candido</li>
                            <li><a href="tel://+573153711299">+57 315 371 1299</a></li>
                            <li><a href="mailto:villabon.trujillo@gmail.com">villabon.trujillo@gmail.com</a></li>
                        </ul>
                    </div>

                </div>

                <div class="row copyright">
                    <div class="col-md-12 text-center">
                        <p>
                            <small class="block">&copy; Robinson Villabon Todos los derechos reservados.</small> 
                            <small class="block">Diseñado por <a href="" target="_blank">Robinson Villabon</a></small>
                        </p>
                        <p>
                            <ul class="fh5co-social-icons">
                                <li><a href="#"><i class="icon-twitter2"></i></a></li>
                                <li><a href="#"><i class="icon-facebook2"></i></a></li>
                                <li><a href="#"><i class="icon-linkedin2"></i></a></li>
                                <li><a href="#"><i class="icon-dribbble2"></i></a></li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;