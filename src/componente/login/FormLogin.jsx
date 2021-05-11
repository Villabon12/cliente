import {useHistory} from "react-router-dom";
import React, {useCallback, useEffect, useState, useContext} from 'react';
import axios from "axios";
import {AuthContext} from '../../auth/AuthContex';
import {types} from '../../types/types';


const FormLogin = ()=>{

    const {dispatch} = useContext(AuthContext);
    const [alertErr, setAlertErr] = useState(false);
    const history = useHistory();
    const [formLogin, setFormLogin] = useState({
        email: {value: '', err: false},
        contrasenia: {value: '', err: false},
    });

    const {email, contrasenia} = formLogin;

    const login = useCallback(async() =>{
        try {
            const {data} = await axios.post(
                `${process.env.REACT_APP_API}/login/login`,
                {email: email.value, contrasenia: contrasenia.value}
            );
            if (data.exist == 0) {
                setFormLogin({
                    email: {value: '', err: true},
                    contrasenia: {value: '', err: true},
                });
                setAlertErr(true);
                return;
            }
            localStorage.setItem('idUserLoged', data.userLogin);
            let userLogin = data.userLogin;
            const lastPath = localStorage.getItem('lastPath') || '/';
            dispatch({
              type: types.login,
              payload: {userLogin}
            });
            history.push(lastPath);
            
        } catch (err) {
            console.warn(err);
        }
    }, [email, contrasenia, history, dispatch]);

    const submitLoginForm = (e) => {
        e.preventDefault();
        if (email.value.trim() === '' && contrasenia.value.trim()=== '') {
            setFormLogin({
                email: {value: '', err: true},
                contrasenia: {value: '', err: true},
            });
            return;
        }
        login()
    }

    useEffect(() => {
        const objInputEmail = document.getElementById('email');
        const objInputPasswd = document.getElementById('contrasenia');

    if (alertErr)
      setTimeout(() => setAlertErr(false), 1000)

    const validateInputEmail = (e) => {
      if (email.value.trim() !== '') {
        setFormLogin({
          ...formLogin,
          email: { ...email, err: false }
        })
      } else if (e.keyCode === 8 && email.value === '') {
        setFormLogin({
          ...formLogin,
          email: { ...email, err: true }
        });
      }
    }

    const validateInputPasswd = (e) => {
      if (contrasenia.value.trim() !== '') {
        setFormLogin({
          ...formLogin,
          contrasenia: { ...contrasenia, err: false }
        })
      } else if (e.keyCode === 8 && contrasenia.value === '') {
        setFormLogin({
          ...formLogin,
          contrasenia: { ...contrasenia, err: true }
        });
      }
    }

    objInputEmail.addEventListener('keyup', validateInputEmail);
    objInputPasswd.addEventListener('keyup', validateInputPasswd);
    return () => {
      objInputEmail.removeEventListener('keyup', validateInputEmail);
      objInputPasswd.removeEventListener('keyup', validateInputPasswd);
    }
  });

  const handleInputChange = ({ target }) => {
    setFormLogin((current) => ({
      ...current,
      [target.name]: { ...current[target.name], value: target.value }
    }));
  }

    return(
        <>
            <div id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div class="display-t js-fullheight">
                            <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                  
                              <h1>Inicia Sesion</h1>
                            </div>
                            </div>
                        </div>
                    </div>
                  
                    <form onSubmit={ submitLoginForm }>
                        <div className="form-group"><input className={`form-control ${(email.err) ? 'is-invalid' : ''}`} type="email" name="email" placeholder="Correo" onChange={handleInputChange} id="email"/></div>
                        <div className="form-group"><input className={`form-control input-login-card ${(contrasenia.err) ? 'is-invalid' : ''}`} type="password" name="contrasenia" onChange={handleInputChange} placeholder="Contraseña" id="contrasenia" />
                        {(alertErr) && (
                            <div className="alert alert-danger" role="alert">
                                Credenciales invalidas. Vuelve a intentarlo
                            </div>
                        )}</div>
                        <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Iniciar</button></div>

                        <a href="registro" class="forgot">Registrar</a>
                    </form> 
                  </div>           
                </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>        
            
        </>
    );
}

export default FormLogin;