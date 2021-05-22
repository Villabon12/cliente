import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRoute = ({isAuthenticated, component: PublicComponent, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>(
            (!isAuthenticated)
                ? <PublicComponent {...props} />
                : <Redirect to='/admin' />
        )}/>
    )
}