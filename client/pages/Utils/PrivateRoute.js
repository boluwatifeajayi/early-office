
import React from "react"
import {Route, Redirect} from "react-router-dom"
import { getauthToken } from "./common"


const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={props => {
                return getauthToken() ? <Component {...props}/> 
                : <Redirect to={{pathname: "/login"}} />
            }}
        
        />
    )
}

export default PrivateRoute

