import React from 'react';
import Usuario from '../usuario';

const Table_producto = ({producto}) => {
    return(
        <div class="col-lg-12">
            <h2 class="title-1 m-b-25">Producto</h2>                           
            <div class="table-data__tool-right">
                <button class="au-btn au-btn-icon au-btn--green au-btn--small" data-toggle="modal" data-target="#agregarP">
                    <i class="zmdi zmdi-plus"></i>agregar producto
                </button>
            </div>
            <br/>
            <div class="table-responsive">
                <table class="table table-borderless table-striped table-earning">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Producto</th>
                            <th class="text-right">Detalle</th>
                            <th class="text-right">Precio</th>
                            <th class="text-right">Imagen</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {producto.map((producto)=>(
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre} </td>
                            <td class="text-right"> {producto.descripcion} </td>
                            <td class="text-right"> {producto.precio} </td>
                            <td class="text-right"> {producto.imagen} </td>
                            <td class="text-right"> {producto.categoria_id} </td>
                            <td>
                                <div class="container">
                                    <div class="table-data-feature">
                                        <button class="item" data-toggle="modal" data-target="#modificarp{{id}}" data-toggle="tooltip" data-placement="top" title="Edit">
                                            <i class="zmdi zmdi-edit"></i>
                                        </button>
                                        <button class="item" data-toggle="modal" data-target="#eliminarp{{id}}"  data-toggle="tooltip" data-placement="top" title="Delete">
                                            <i class="zmdi zmdi-delete"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table_producto;