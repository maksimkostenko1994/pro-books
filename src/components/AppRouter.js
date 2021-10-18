import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRouters, publicRoutes} from "../routes";
import {BOOKS_ROUTE, HOME_ROUTE} from "./utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../config/fbConfig";

const AppRouter = () => {

    const [user] = useAuthState(auth)

    return user ? (
        <Switch>
            {privateRouters.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={BOOKS_ROUTE}/>
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    )
};

export default AppRouter;