import React from "react";
import { Route, Redirect } from "react-router-dom";

const UnauthRoute = ({ component: Component, path, ...props }) => {
  return (
    <Route path={path}>
      {props.loggedIn ? <Redirect to="/" /> : <Component {...props} />}
    </Route>
  );
};

export default UnauthRoute;