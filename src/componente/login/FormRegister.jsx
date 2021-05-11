import React, {useState} from 'react';
import axios from 'axios';

const { REACT_APP_API } = process.env;
const endpointAuth = `${REACT_APP_API}/login/register`;


const FormRegistro = () =>{
    
    const [nombres, setNombre] = useState("");
    const [fecha_nacimiento, setFecha] = useState("");
    const [email, setEmail] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const register = () => {
        axios.post(endpointAuth, {
            nombres: nombres, email: email, 
            contrasenia: contrasenia, fecha_nacimiento: fecha_nacimiento
        }).then((response) =>{
            console.log(response);
        });
    };
    

    return(
        <>
        <div id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                              <h1>Registrar</h1>
                            </div>
                        </div>
                    </div>
                </div>
            <form onSubmit={register}>
                
                <div className="form-group"><input type="text" placeholder="Nombre" onChange={(e) =>{ setNombre(e.target.value)}} className="form-control" /></div>
                <div className="form-group"><input className="form-control" type="date" onChange={(e) =>{ setFecha(e.target.value)}} placeholder="Fecha de nacimiento"/></div>
                <div className="form-group"><input className="form-control bg-inputs-da" type="email" onChange={(e) =>{ setEmail(e.target.value)}} placeholder="Correo"/></div>
                <div className="form-group"><input className="form-control" type="password" placeholder="Contraseña" onChange={(e) =>{ setContrasenia(e.target.value)}}/></div>
                <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Registrar</button></div>
            </form>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
        </>
    );
}

export default FormRegistro;