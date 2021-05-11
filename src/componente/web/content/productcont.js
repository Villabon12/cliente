import React from 'react';

const Productcont = ({productos})=>{
    const style = {
        backgroundColor: '#F0FFF0' 
    }
    return(
        <>
        {productos.map((productos) => (
            <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" >
                <div class="fh5co-item animate-box" key={productos.id} style={style}>
                    <img src={productos.imagen} class="img-responsive" width="400" height="500" align="right"/>
                    <h3 className="text-center">{productos.nombre}</h3>
                    <h3>{productos.precio}</h3>
                    <h3>{productos.descripcion}</h3>
                </div>
            </div>

        ))}
        </>
    );
}

export default Productcont;