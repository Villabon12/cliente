import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({isAuthenticated, component: Privatecomponent, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>(
            (isAuthenticated)? <Privatecomponent {...props}/> : <Redirect to="/login"/>
        )}/>
    )
}
