import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({isAuthenticated, component: privateComponent, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>(
            (isAuthenticated)? <privateComponent {...props}/> : <Redirect to="/login"/>
        )}/>
    )
}
