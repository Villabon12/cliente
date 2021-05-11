import React from 'react';

const Table_blog = (props) => {
    return(
        <div class="col-lg-12">
            <h2 class="title-1 m-b-25">Blog</h2>                           
            <div class="table-data__tool-right">
                <button class="au-btn au-btn-icon au-btn--green au-btn--small" data-toggle="modal" data-target="#agregarP">
                    <i class="zmdi zmdi-plus"></i>agregar blog
                </button>
            </div>
            <br/>
            <div class="table-responsive">
                <table class="table table-borderless table-striped table-earning">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Publicacion</th>
                            <th>Imagen</th>
                            <th>Usuario</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>publicacion </td>
                            <td> imagen </td>
                            <td> usuario </td>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table_blog;