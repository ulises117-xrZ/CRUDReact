import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Profile from '../screens/Profile';


export default function Index() {
    return (
        <Router>
            <header></header>
            <Switch>
                <Route exact path = "/profile">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    )
}
