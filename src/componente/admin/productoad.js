import React, {useState, useEffect} from 'react';
import TablePr from './cont/table_producto';

const Productoad = () =>{

    const [producto, setProducto] = useState([])

    const getProducto = () =>{
        fetch('http://localhost:4000/producto/')
        .then(res => res.json())
        .then(res => setProducto(res))
    }

    useEffect(()=> {
        getProducto()
    },[])

    return(
    <>
    <div class="page-wrapper">
        <div class="page-container">
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <TablePr producto={producto} />

                        </div>
                    </div>
                </div>
                    modalModificar
                    modalEliminar 

                 modalAgregar 
            </div>
        </div>
    </div>
    
    </>
    );
}

export default Productoad; 