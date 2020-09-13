import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Main from "../Main"
import Movie from "./Movie";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/search" component={App} exact/>
            <Route path="/movie/:id" component={Movie} />
        </Switch>
    </BrowserRouter>
);

export default Router;
