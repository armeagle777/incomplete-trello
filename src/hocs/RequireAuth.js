import React from 'react';
import {useStateContext} from "../state/StateContext";
import {useLocation, Navigate, Outlet} from "react-router-dom";

function RequireAuth({children}) {
    const location = useLocation()

    const {state:{isLogedIn}} = useStateContext()
    if(!isLogedIn){
        return <Navigate to='/login' state={{path:location.pathname}} />
    }

    return children ? children : <Outlet />
}

export default RequireAuth;