import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearErrors } from "../../redux/user/userActions";

export const ProtectedRoute = ({
  component: Component,
  type,
  secured = false,
  path,
  admin,
  ...rest
}) => {
  const logged = useSelector(state => state.user.logged);
  const isAdmin = useSelector(state => state.user.isAdmin);
  const dispatch = useDispatch();

  dispatch(clearErrors());

  if (logged && (path === "/sign-in" || path === "/sign-up")) {
    return <Redirect to="/booking" />;
  } else if (isAdmin && path === "/admin") {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else if (!logged && secured) return <Redirect to="/sign-in" />;

  return <Route {...rest} render={props => <Component {...props} />} />;
};
