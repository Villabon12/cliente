import React from 'react';

const Blogcont = (props)=>{
    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-push-1 animate-box">
                        <form action="" method="post">
                            <div class="form-group">
                                <h2>PUBLICAR</h2>
                                    <textarea name="texto" id="" cols="120" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary btn-block" type="submit">
                                    Publicar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogcont;