import React from 'react';
import Aboutcont from '../content/aboutcont';


const About = (props)=>{
    return(
        <>
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner"  data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                <h1> <em>Nuestro</em> Café</h1>
                                <h2>SISU</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </header>
        <Aboutcont/>
        </>
    );
}

export default About;