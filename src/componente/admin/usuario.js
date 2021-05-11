import React, {useState, useEffect} from 'react';
import TableU from './cont/table_usuario';

const Usuario = () =>{

    const [usuario, setUsuario] = useState([])
    
    const getUser = () =>{
        fetch('http://localhost:4000/login')
        .then(res => res.json())
        .then(res => setUsuario(res))
    }

    const updUser = () =>{
        
    }
    useEffect(() => {
        getUser()
        updUser()
    }, [])
    
    return(
    <>
    <div class="page-wrapper">
        <div class="page-container">
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <TableU usuario ={usuario}/>
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

export default Usuario; 