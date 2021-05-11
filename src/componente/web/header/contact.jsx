import React from 'react';
import Contactcont from '../content/contactcont';

const Contact = (props)=>{
    return(
        <>
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                <h1>Reserva <em>con un</em> Click</h1>
                                <h2>Gracias por preferirnos</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </header>

        <Contactcont/>
        </>
    );
}

export default Contact;