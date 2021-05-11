import React from 'react';
import Blogcont from '../content/blogcont';

const Blog = (props)=>{
    return(
        <>
            <div id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="display-t js-fullheight">
                                <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
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