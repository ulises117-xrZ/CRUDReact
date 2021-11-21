import React, {useState, useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/authProvider';
export default function PrivateRoute({component: Component, ...rest}) {
    const auth = useAuth();
    return (
        <Route
            {...rest}
        >

        </Route>
    )
}
