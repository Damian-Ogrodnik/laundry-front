import React from "react";
import { Loader } from "../Loader";

export const withError = WrappedComponent => ({ error, loading, ...props }) => {
  return loading ? (
    <Loader />
  ) : error ? (
    <div>Ooops... Something went wrong. Try again later.</div>
  ) : (
    <WrappedComponent {...props} />
  );
};
