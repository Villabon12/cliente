import React from 'react';

const Productcont = ({caliente, frios, bebidas, postres})=>{
    const style = {
        backgroundColor: '#828282   ',   
        color: 'white'
    }

    const letra = {
        color: 'white',
        align: 'center'
    }
    return(
        <>
        <br/><br/>
        <h1 style={letra} className='text-center' >COMIDAS CALIENTE</h1>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    {caliente.map((productos) => (
                    <div class="col-md-4" >
                        <div class="card mb-4 shadow-sm" key={productos.id} style={style}>
                        <img class="card-img-top" src={productos.imagen}/>  
                        <div class="card-body"> 
                            <p class= "card-title"><h1>{productos.nombre}</h1> </p>
                            <div class="card-text text-end"><h2>{productos.precio}</h2> <br/></div>
                            <div class="blockquote-footer"><h3>{productos.descripcion}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
        <h1 style={letra} className='text-center'>COMIDAS FRIA</h1>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    {frios.map((productos) => (
                    <div class="col-md-4" >
                        <div class="card mb-4 shadow-sm" key={productos.id} style={style}>
                        <img class="card-img-top" src={productos.imagen}/>  
                        <div class="card-body"> 
                            <p class= "card-title"><h1>{productos.nombre}</h1> </p>
                            <div class="card-text text-end"><h2>{productos.precio}</h2> <br/></div>
                            <div class="blockquote-footer"><h3>{productos.descripcion}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
        <h1 style={letra} className='text-center'>BEBIDAS</h1>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    {bebidas.map((productos) => (
                    <div class="col-md-4" >
                        <div class="card mb-4 shadow-sm" key={productos.id} style={style}>
                        <img class="card-img-top" src={productos.imagen}/>  
                        <div class="card-body"> 
                            <p class= "card-title"><h1>{productos.nombre}</h1> </p>
                            <div class="card-text text-end"><h2>{productos.precio}</h2> <br/></div>
                            <div class="blockquote-footer"><h3>{productos.descripcion}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
        <h1 style={letra} className='text-center'>POSTRES</h1>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    {postres.map((productos) => (
                    <div class="col-md-4" >
                        <div class="card mb-4 shadow-sm" key={productos.id} style={style}>
                        <img class="card-img-top" src={productos.imagen}/>  
                        <div class="card-body"> 
                            <p class= "card-title"><h1>{productos.nombre}</h1> </p>
                            <div class="card-text text-end"><h2>{productos.precio}</h2> <br/></div>
                            <div class="blockquote-footer"><h3>{productos.descripcion}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>


        </>
    );
}

export default Productcont;