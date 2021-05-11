import React from 'react';
import Aboutcont from '../content/aboutcont';


const About = (props)=>{
    return(
        <>
        <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner"  data-stellar-background-ratio="0.5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="display-t js-fullheight">
                            <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
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