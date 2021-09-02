import React from "react";
import { Redirect,Switch,Route } from "react-router-dom";
import ConfigRoutes from "../../config/routes";


const PrivateRoutes = (props) => {
    const role = props.role || "guest";
    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoute = ConfigRoutes[role].redirectRoutes;
    return (
        <div>
                <Switch>
                    {allowedRoutes.map(routes => (<Route 
                    exact path={routes.url}
                    key={routes.url}
                    
                    ><routes.component setRole={props.setRole} /></Route>
                    ))}
                    <Redirect to={redirectRoute}></Redirect>
    
      </Switch>
        </div>
    )
}

export default PrivateRoutes;