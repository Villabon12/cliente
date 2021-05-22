import React, {useState} from 'react';
import usePasswordToggle from "../../hooks/usePassword";
import PasswordStrengthIndicator from "./comp/IndicadorPass";
import axios from 'axios';

const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

const FormRegistro = () =>{
    
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValidity, setPasswordValidity] = useState({
        number: null,
        specialChar: null
    });

    const onChangePassword = password => {
        setPassword(password);

        setPasswordValidity({
            number: isNumberRegx.test(password) ? true : false,
            specialChar: specialCharacterRegx.test(password) ? true : false
        });
    };

    const [registar, setRegister] = useState({
        nombres: '',
        email: '',
        contrasenia: '',
        fecha_nacimiento: '',
        rol: '2'
    });

    const handleChange = e =>{
        onChangePassword([e.target.value])
        setRegister({
            ...registar,
            [e.target.name]: e.target.value
        })
    }

    let {nombres, contrasenia, email, fecha_nacimiento} = registar

    const handleSubmit = () =>{

        /* Validacion de datos */

        if (nombres === '' || contrasenia === '' || email === '' || fecha_nacimiento === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        /* Consulta */

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(registar)
        }
        fetch('http://localhost:4000/login/register', requestInit)
        .then(res => res.json())
        .then(res => console.log())

    }

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
            <form onSubmit={handleSubmit}>
                
                <div className="form-group"><input name="nombres" type="text" placeholder="Nombre" onChange={handleChange} className="form-control" id="nombres" /></div>
                <div className="form-group"><input name="fecha_nacimiento" className="form-control" type="date" onChange={handleChange} placeholder="Fecha de nacimiento" id="fecha_nacimiento"/></div>
                <div className="form-group"><input name="email" className="form-control bg-inputs-da" type="email" onChange={handleChange} placeholder="Correo" id="email"/></div>
                <div className="form-group">
                    <input name="contrasenia" className="form-control" 
                    type={PasswordInputType} value={password} placeholder="Contraseña"
                    onFocus={()=> setPasswordFocused(true)}
                    onChange={handleChange} id="contrasenia"/>
                </div>

                {passwordFocused && (
                        <PasswordStrengthIndicator
                            validity={passwordValidity}
                        />
                    )}

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