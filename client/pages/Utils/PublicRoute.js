import {Route, Redirect} from "react-router-dom"
import { getauthToken } from "./common"


const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={props => {
               return !getauthToken() ? <Component {...props}/> 
                : <Redirect to={{pathname: "/randdashboard"}} />

            }}
        
        />
    )
}

export default PublicRoute

