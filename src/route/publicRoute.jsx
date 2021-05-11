import React from 'react'
import { Route } from 'react-router'

export const PublicRoute = ({isAuthenticated, component: PublicComponent, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>(
            (!isAuthenticated)
                ? <PublicComponent {...props} />
                : <PublicComponent {...props} />
        )}/>
    )
}