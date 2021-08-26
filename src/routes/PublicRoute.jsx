import React from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PublicRoute = ({logged, component: Component, ...rest}) => {

    return (
        <Route {...rest}
            component={(props) => (
                <Component {...props}/> 
            )
            }
        />
    )
}
PublicRoute.propTypes ={
    logged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}