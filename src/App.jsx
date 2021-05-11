import { AuthContext } from "./auth/AuthContex";
import React, { useReducer, useEffect } from "react";
import authReducer from './auth/authReducer';
import { Routeapp } from "./route/routeApp";
import Rutas from "./componente/Rutas"


const init = () => {
    return JSON.parse(localStorage.getItem('idUserLoged')) || { logged: false };
}

function App(){
    const [user, dispatch] = useReducer(authReducer,{},init);
    useEffect(()=> {
        localStorage.setItem('idUserLoged', JSON.stringify(user))
    }, [user]);
    return(
        <>
        <AuthContext.Provider value={{ user, dispatch }}>
            <Rutas/>

        </AuthContext.Provider>
        </>
    );
}

export default App;