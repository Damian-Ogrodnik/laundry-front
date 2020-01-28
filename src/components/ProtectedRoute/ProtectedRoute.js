import React from "react";
import { Route, Redirect } from "react-router-dom";

import { login } from "../../data/login";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return login.authorization ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="./sign-in" />
  );
};
