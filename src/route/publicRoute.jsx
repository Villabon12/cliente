import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRoute = ({isAuthenticated, component: publicComponent, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>(
            (!isAuthenticated)&& <publicComponent {...props}/>
        )}/>
    )
}