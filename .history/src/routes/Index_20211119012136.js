import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../screens/Home';
import Profile from '../screens/Profile';


export default function Index() {
    return (
        <Router>
            <header></header>
            <Switch>
                <Route exact path = "/profile">
                </Route>
                <Route exact path = "/home">
                </Route>
            </Switch>
        </Router>
    )
}
