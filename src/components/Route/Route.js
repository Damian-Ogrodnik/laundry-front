import React, { useEffect } from "react";
import { Route as ReactRouter, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearErrors } from "../../redux/user/userActions";

export const Route = ({ component: Component, secured, path, ...rest }) => {
  const { error, isAdmin, logged } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) dispatch(clearErrors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  if (logged && !isAdmin && (path === "/sign-in" || path === "/sign-up")) {
    return <Redirect to="/booking-board" />;
  } else if (isAdmin && logged && path === "/sign-in") {
    return <Redirect to="/admin" />;
  } else if (!logged && secured) return <Redirect to="/sign-in" />;

  return <ReactRouter {...rest} render={(props) => <Component {...props} />} />;
};
