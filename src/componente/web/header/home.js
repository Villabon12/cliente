import React from 'react';
import Homecont from '../content/homecont';

const Home = (props)=>{
    return(
    <>
        <div id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="display-t js-fullheight">
                            <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                <h1>El mejor café <em>&amp;</em> Restaurante <em>en</em> Neiva</h1>
                                <h2>sigue nuestra fanpage <a href="https://www.facebook.com/r.villabon" target="_blank">Sisu</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Homecont/>
    </>
    );
}

export default Home;