import React from 'react';
import Blogcont from '../content/blogcont';

const Blog = (props)=>{
    return(
        <>
            <div id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="display-t js-fullheight">
                                <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                    <h1>BLOG</h1>
                                    <h2>Puedes ver nuestras publicaciones en esta seccion</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Blogcont/>
        </>
    );
}

export default Blog;