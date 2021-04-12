import React from 'react';

const Registro = (props)=>{
    return(
        <>
        <div class="login-dark">
            <form method="post">
                <h2 class="sr-only">Registro</h2>
                <div class="illustration"><span class="iconify" data-icon="bi:cloud-fog2" data-inline="false"></span></div>
                <div class="form-group"><input class="form-control" type="name" name="nombres" placeholder="Nombre"/></div>
                <div class="form-group"><input class="form-control" type="date" name="fecha_nacimiento" placeholder="Fecha de nacimiento"/></div>
                <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Correo"/></div>
                <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Contraseña"/></div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Registrar</button></div>
            </form>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </>
    );
}

export default Registro;