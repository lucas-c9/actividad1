import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Inicio from "../screens/Inicio"
import Bloque2 from "../screens/Bloque2";



export default function Routes() {
    return (
        <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/Bloque2" component={Bloque2} />
        <Route path="/inicio" component={Inicio} isPrivate />
        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        <Route component={Inicio} />
        </Switch>
    );
}