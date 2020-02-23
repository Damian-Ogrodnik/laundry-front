import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearErrors } from "../../redux/login/loginActions";

export const ProtectedRoute = ({
  component: Component,
  type,
  secured = false,
  path,
  ...rest
}) => {
  const logged = useSelector(state => state.login.logged);
  const dispatch = useDispatch();

  dispatch(clearErrors());

  if (logged && path === "/sign-in") return <Redirect to="/booking" />;
  if (logged && path === "/sign-up") return <Redirect to="/booking" />;
  if (!logged && secured) return <Redirect to="/sign-in" />;

  return <Route {...rest} render={props => <Component {...props} />} />;
};
