import React from 'react';

const Mblog = (props) =>{
    return(
        <>
        {/* Modal Agregar */}
        <div class="modal fade" id="agregarU" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Agregar Usuario</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="POST">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputName4">Usuario</label>
                                <input type="name" class="form-control" id="user" placeholder="Usuario"/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Contraseña</label>
                                <input type="password" class="form-control" id="pass" placeholder="Contraseña"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Nombre</label>
                                <input type="text" class="form-control" id="nombre" placeholder="Nombre"/>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Correo</label>
                                <input type="text" class="form-control" id="email" placeholder="Email"/>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputCity">Telefono</label>
                                <input type="text" class="form-control" id="telefono" placeholder="Celular"/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal Eliminar */}
        <div class="modal fade" id="eliminarb{{id}}"  data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Eliminar</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>¿Estás seguro que quieres eliminar este producto?</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#"  class="btn btn-primary">Si</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
        {/* Modal modificar */}

        <div class="modal fade" id="modificar{{id}}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <form action="editar-info/{{id}}" method="POST">
                        <div class="modal-header">
                            <h5 class="modal-title">Modificar</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        
                            <div class="form-row ">
                                <div class="col-md-6 mb-3">
                                <label for="nombre">Nombre</label>
                                <input type="text" class="form-control" name="nombre" value="{{nombre}}" required/>
                                </div>
                                <div class="col-md-6 mb-3">
                                <label for="user">Usuario</label>
                                <input type="text" class="form-control" name="user" value="{{user}}" required/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="pass">Contraseña</label>
                                    <input type="text" name="pass" class="form-control" value="{{pass}}" required/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="email" value="{{email}}" required/>
                                </div>
                                <div class="form-group col-md-6 mb-3">
                                    <label for="celular">Telefono</label>
                                    <input type="text" class="form-control" name="celular" value="{{telefono}}" required/>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button class="btn btn-primary" type="submit">Guardar Cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </>
    );
}

export default Mblog;