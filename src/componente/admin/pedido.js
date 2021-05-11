import React from 'react';
import TableP from './cont/table_pedido'

const Pedido = (props) =>{
    return(
    <>
    <div class="page-wrapper">
        <div class="page-container">
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <TableP/>
                            <br/>
                            <div class="table-data__tool-right">
                                <button class="au-btn au-btn-icon au-btn--green au-btn--small">
                                    <i class="zmdi zmdi-plus"></i>Enviar pedido</button>
                            </div>
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

export default Pedido; 