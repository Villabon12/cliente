import React, {useState, useEffect} from 'react';
import Contenido from '../content/productcont';

const Product = ()=>{

    const [productos, setProducto] = useState([])

    const getProduct = () =>{
        fetch('http://localhost:4000/producto')
        .then(res => res.json())
        .then(res => setProducto(res))
    }

    useEffect(()=> {
        getProduct()
    },[])

    return(
        <>
            <div id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="display-t js-fullheight">
                                <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                    <h1>PRODUCTOS</h1>
                                    <h2>Puedes ver nuestros maravillosos productos</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contenido productos ={productos} />

        </>
    );
}

export default Product;