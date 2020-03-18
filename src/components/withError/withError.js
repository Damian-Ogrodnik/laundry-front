import React from "react";

export const withError = WrappedComponent => ({ error, loading, ...props }) => {
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Ooops... Something went wrong. Try again later.</div>
  ) : (
    <WrappedComponent {...props} />
  );
};
