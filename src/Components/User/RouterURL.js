import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import HomePage from '../User/HomePage'
import DongHo from './DongHo';
import Admin from '../Admin/Admin';
import Error from '../ErrorPage/ErrorPage'
import Login from '../Admin/Login';
function RouterURL(params) {
    return (
        <Switch>
            <Route exact strict path="/" component={HomePage} />
            <Route path="/dongho" component={DongHo} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route component={Error} />
        </Switch>
    )
}

export default RouterURL;