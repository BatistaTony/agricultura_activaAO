import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>(
      authed ? <Component {...props} /> : <Redirect to="/register" />
    )}
  />
);


export default PrivateRoute