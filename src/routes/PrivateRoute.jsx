import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PrivateRoute = ({logged, component: Component, ...rest}) => {
    console.log("logged", logged)
    console.log("Component", Component)
    return (
        <Route {...rest}
            component={(props) => (
                (logged) ? <Component {...props}/> 
                : <Redirect to="/login"/>
            )
            }
        />
    )
}
PrivateRoute.propTypes ={
    logged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}