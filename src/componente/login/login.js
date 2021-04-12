import React from 'react';

const Login = (props)=>{
    return(
        <>
        <div class="login-dark">
            <form method="post">
                <h2 class="sr-only">Inicia Sesion</h2>
                <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
                <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Correo"/></div>
                <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Contraseña"/></div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Iniciar</button></div><a href="#" class="forgot">¿Olvidó contraseña o correo?</a>
                <a href="registro" class="forgot">Registrar</a></form>
        </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </>
    );
}

export default Login;