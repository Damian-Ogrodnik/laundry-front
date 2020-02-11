import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({
  component: Component,
  type,
  secured = false,
  ...rest
}) => {
  const logged = useSelector(state => state.user.logged);

  if (logged && type === "sign-in") return <Redirect to="/booking" />;
  if (logged && type === "sign-up") return <Redirect to="/booking" />;
  if (!logged && secured) return <Redirect to="/sign-in" />;

  return <Route {...rest} render={props => <Component {...props} />} />;
};
