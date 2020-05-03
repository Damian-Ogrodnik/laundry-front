import React from "react";

import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";

export const withError = (WrappedComponent) => ({
  error,
  loading,
  ...props
}) => {
  return loading ? (
    <Loader />
  ) : error ? (
    <Error
      errorMsg={"Ooops... Something went wrong. Try again later."}
      name={"main"}
      icon={true}
    />
  ) : (
    <WrappedComponent {...props} />
  );
};
