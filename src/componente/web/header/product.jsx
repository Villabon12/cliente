import React, {useState, useEffect} from 'react';
import Contenido from '../content/productcont';

const Product = ()=>{

    const [caliente, setCaliente] = useState([])
    const [bebidas, setBebidas] = useState([])
    const [frios, setFrios] = useState([])
    const [postres, setPostres] = useState([])
    const baseUrl = process.env.REACT_APP_API

    const getCaliente = () =>{
        fetch(`http://localhost:4000/producto/caliente`)
        .then(res => res.json())
        .then(res => setCaliente(res))
    }

    useEffect(()=> {
        getCaliente()
    },[])


    const getFrios = () =>{
        fetch('http://localhost:4000/producto/frio')
        .then(res => res.json())
        .then(res => setFrios(res))
    }

    useEffect(()=> {
        getFrios()
    },[])


    const getPostres = () =>{
        fetch('http://localhost:4000/producto/postres')
        .then(res => res.json())
        .then(res => setPostres(res))
    }

    useEffect(()=> {
        getPostres()
    },[])


    const getBebidas = () =>{
        fetch('http://localhost:4000/producto/bebidas')
        .then(res => res.json())
        .then(res => setBebidas(res))
    }

    useEffect(()=> {
        getBebidas()
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

            <Contenido bebidas ={bebidas} postres = {postres} caliente={caliente} frios={frios}/>

        </>
    );
}

export default Product;