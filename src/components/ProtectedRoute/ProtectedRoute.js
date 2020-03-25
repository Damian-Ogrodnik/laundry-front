import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearErrors } from "../../redux/user/userActions";

export const ProtectedRoute = ({
  component: Component,
  type,
  secured = false,
  path,
  ...rest
}) => {
  const logged = useSelector(state => state.user.logged);
  const dispatch = useDispatch();

  dispatch(clearErrors());

  if (logged && (path === "/sign-in" || path === "/sign-up")) {
    return <Redirect to="/booking" />;
  } else if (!logged && secured) return <Redirect to="/sign-in" />;

  return <Route {...rest} render={props => <Component {...props} />} />;
};
